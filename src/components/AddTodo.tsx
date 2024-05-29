import { Box, Input, Button } from "@chakra-ui/react";

const AddTodo = () => {
  return (
    <Box my={3} mx={1} gap={3}>
      <Input placeholder="Add TODO" />
      <Button my={3} colorScheme="green">
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;
