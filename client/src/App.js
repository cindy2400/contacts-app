import { useEffect, useState } from "react";
import Form from "./component/Form";
import Items from "./component/Items";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  const getInfoFromForm = (name, email, telephone) => {
    setName(name);
    setEmail(email);
    setTelephone(telephone);
  };

  const changeStateAfterEditDelete = (contacts) => {
    fetch("http://localhost:3001/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        telephone,
      }),
    };

    fetch("http://localhost:3001/contacts", reqOptions).then((res) =>
      changeStateAfterEditDelete(null)
    );

    setContacts([...contacts, { name, email, telephone }]);

    setName("");
    setEmail("");
    setTelephone("");
  };

  return (
    <div>
      <Form
        submitFormHandler={submitFormHandler}
        getInfoFromForm={getInfoFromForm}
        name={name}
        email={email}
        telephone={telephone}
      />
      <Items
        contacts={contacts}
        changeStateAfterEditDelete={changeStateAfterEditDelete}
      />
    </div>
  );
}

export default App;
