import "./App.css";
import Contact from "./Contact.jsx";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>

      <Contact
        name="Tony Stark"
        phoneNumber="541-555-0101"
        email="tony@example.com"
        avatar="https://i.pravatar.cc/150?img=11"
      />

      <Contact
        name="Bruce Wayne"
        phoneNumber="541-555-0102"
        email="bruce@example.com"
        avatar="https://i.pravatar.cc/150?img=12"
      />

      <Contact
        name="Peter Parker"
        phoneNumber="541-555-0103"
        email="peter@example.com"
        avatar="https://i.pravatar.cc/150?img=13"
      />

    </div>
  );
}

export default App;