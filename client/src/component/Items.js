import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const Items = ({ contacts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const onDeleteHandler = (id) => {
    fetch(`http://localhost:3001/contact/${id}`, { method: "DELETE" }).then(
      (res) => console.log(res)
    );
  };

  const submitFormEditHandler = (e, id) => {
    e.preventDefault();
    const reqOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        telephone,
      }),
    };

    fetch(`http://localhost:3001/contact/${id}`, reqOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));

    onClose();
  };

  const onClickModalHandler = (id, name, email, telephone) => {
    setId(id);
    onOpen();
    setName(name);
    setEmail(email);
    setTelephone(telephone);
  };

  return (
    <Card m="5">
      <CardHeader>
        <Heading size="md">List contacts</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {contacts.length !== 0 ? (
            contacts.map((contact) => (
              <Box key={contact.id}>
                <Heading size="xs" textTransform="uppercase">
                  {contact.name}
                </Heading>
                <Text pt="2" fontSize="sm">
                  {contact.email}
                </Text>
                <Text pt="2" fontSize="sm">
                  {contact.telephone}
                </Text>
                <Button
                  colorScheme="orange"
                  mt="2"
                  mb="2"
                  mr="2"
                  onClick={() =>
                    onClickModalHandler(
                      contact.id,
                      contact.name,
                      contact.email,
                      contact.telephone
                    )
                  }
                >
                  Edit
                </Button>
                <Button
                  onClick={() => onDeleteHandler(contact.id)}
                  colorScheme="red"
                  m="2"
                >
                  Delete
                </Button>
              </Box>
            ))
          ) : (
            <Heading as="h5" size="sm">
              Contacts empty
            </Heading>
          )}
        </Stack>
      </CardBody>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={(e) => submitFormEditHandler(e, id)}
              type="submit"
              colorScheme="teal"
              size="md"
              mr={3}
            >
              Submit
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default Items;
