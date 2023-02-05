import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
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
import Form from "./Form";

const Items = ({ contacts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                  onClick={onOpen}
                >
                  Edit
                </Button>
                <Button colorScheme="red" m="2">
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
            <Form />
          </ModalBody>

          <ModalFooter>
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
