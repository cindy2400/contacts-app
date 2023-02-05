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

    fetch("http://localhost:3001/contacts", reqOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));

    setContacts([...contacts, { name, email, telephone }]);

    setName("");
    setEmail("");
    setTelephone("");
  };

  return (
    <div>
      <Form
        getInfoFromForm={getInfoFromForm}
        submitFormHandler={submitFormHandler}
        name={name}
        email={email}
        telephone={telephone}
      />
      <Items contacts={contacts} />
    </div>
  );
}

export default App;
