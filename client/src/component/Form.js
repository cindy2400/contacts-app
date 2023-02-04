import { Button, Card, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Form = () => {
  return (
    <Card m="5" p="5">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" />
        <FormLabel>Email</FormLabel>
        <Input type="email" />
        <FormLabel>Telephone</FormLabel>
        <Input type="text" />
        <Button type="submit" mt="4" colorScheme="teal" size="md">
          Submit
        </Button>
      </FormControl>
    </Card>
  );
};

export default Form;
