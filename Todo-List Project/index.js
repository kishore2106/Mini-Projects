import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Todo-List",
  password: "root@123",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function get_items() {
  try{
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    return result.rows;
  } catch(err){
    console.log(err);
  }
}

app.get("/", async (req, res) => {
  const items = await get_items();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  try{
    db.query("INSERT INTO items (title) VALUES ($1)",[item]);
    res.redirect("/");
  } catch (err){
    console.log(err);
  }
});

app.post("/edit", (req, res) => {
  const updatedItemId = req.body.updatedItemId;
  const updatedItemTitle = req.body.updatedItemTitle;
  try{
    db.query("UPDATE items SET title = $1 WHERE id = $2", [updatedItemTitle, updatedItemId]);
    res.redirect("/");
  } catch(err){
    console.log(err);
  }
});

app.post("/delete", (req, res) => {
  const deleteItemId = req.body.deleteItemId;
  try {
    db.query("DELETE FROM items WHERE id = $1", [deleteItemId]);
    res.redirect("/");
  } catch (err){
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
