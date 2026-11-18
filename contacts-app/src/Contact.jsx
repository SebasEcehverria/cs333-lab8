import Avatar from "./Avatar.jsx";

// Displays a contact's information using the props passed to it.
function Contact(props) {
  console.log(props);

  return (
    <div className="contact">
      <Avatar src={props.avatar} name={props.name} />
      <h2>{props.name}</h2>
      <p>Phone: {props.phoneNumber}</p>
      {props.email && <p>Email: {props.email}</p>}
    </div>
  );
}

export default Contact;