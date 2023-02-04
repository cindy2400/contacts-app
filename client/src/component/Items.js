import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const Items = ({ contacts }) => {
  return (
    <Card m="5">
      <CardHeader>
        <Heading size="md">List contacts</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {contacts.map((contact) => (
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
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Items;
