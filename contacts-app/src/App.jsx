import "./App.css";
import Contact from "./Contact.jsx";
import contacts from "./contacts.js";

// Creates a Contact component for each object in the contacts array.
function createContact(contact) {
  return (
    <Contact
      key={contact.id}
      name={contact.name}
      phoneNumber={contact.phoneNumber}
      email={contact.email}
      avatar={contact.avatar}
    />
  );
}

// Displays the contacts page using the data from contacts.js.
function App() {
  console.log(contacts);

  const names = contacts.map(function (contact) {
    return contact.name;
  });

  console.log(names);

  // Shows how many contacts are currently stored.
  console.log("Total contacts:", contacts.length);

  return (
    <div>
      <h1>My Contacts</h1>
      {contacts.map(createContact)}
    </div>
  );
}

export default App;