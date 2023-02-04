import { Button, Card, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

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

    setName("");
    setEmail("");
    setTelephone("");
  };

  return (
    <Card m="5" p="5">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormLabel>Telephone</FormLabel>
        <Input
          type="text"
          onChange={(e) => setTelephone(e.target.value)}
          value={telephone}
        />
        <Button
          onClick={submitFormHandler}
          type="submit"
          mt="4"
          colorScheme="teal"
          size="md"
        >
          Submit
        </Button>
      </FormControl>
    </Card>
  );
};

export default Form;
