// 1. Create a new React app.
// 2. Create a App.jsx component.
// 3. Create a Header.jsx component that renders a <header> element
// to show the Keeper App name in an <h1>.
// 4. Create a Footer.jsx component that renders a <footer> element
// to show a copyright message in a <p> with a dynamically updated year.
// 5. Create a Note.jsx component to show a <div> element with a
// <h1> for a title and a <p> for the content.
// 6. Make sure that the final website is styled like the example shown here:
// https://l1pp6.csb.app/

// HINT: You will need to study the classes in teh styles.css file to appy styling.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
//Render all the notes inside notes.js as a seperate Note component.

//Part 3:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);