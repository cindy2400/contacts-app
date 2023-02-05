import { Button, Card, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRef } from "react";

const Form = ({
  getInfoFromForm,
  submitFormHandler,
  name,
  email,
  telephone,
}) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();

  const onInputHandler = () => {
    getInfoFromForm(
      nameRef.current.value,
      emailRef.current.value,
      telephoneRef.current.value
    );
  };

  return (
    <Card m="5" p="5">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          ref={nameRef}
          value={name}
          onChange={onInputHandler}
        />
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          ref={emailRef}
          value={email}
          onChange={onInputHandler}
        />
        <FormLabel>Telephone</FormLabel>
        <Input
          type="text"
          ref={telephoneRef}
          value={telephone}
          onChange={onInputHandler}
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
