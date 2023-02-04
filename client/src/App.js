import { useEffect, useState } from "react";
import Form from "./component/Form";
import Items from "./component/Items";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div>
      <Form />
      <Items contacts={contacts} />
    </div>
  );
}

export default App;
