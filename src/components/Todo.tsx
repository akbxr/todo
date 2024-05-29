import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Todo = () => {
  return (
    <>
      {/* <Container> */}
      <Flex flexDirection="column" m="2" gap="5" fontWeight="bold">
        <Flex justifyContent="space-between" alignItems="center">
          <Checkbox
            className="custom-checkbox"
            color="white"
            spacing={10}
            colorScheme="green"
          >
            TODO 1
          </Checkbox>
          <Box
            border="1px"
            borderColor="red.500"
            borderRadius="sm"
            px={2}
            py={1}
          >
            <DeleteIcon color="red.500" />
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Checkbox
            className="custom-checkbox"
            color="white"
            spacing={10}
            colorScheme="green"
          >
            TODO 1
          </Checkbox>
          <Box
            border="1px"
            borderColor="red.500"
            borderRadius="sm"
            px={2}
            py={1}
          >
            <DeleteIcon color="red.500" />
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Checkbox
            className="custom-checkbox"
            color="white"
            spacing={10}
            colorScheme="green"
          >
            TODO 1
          </Checkbox>
          <Box
            border="1px"
            borderColor="red.500"
            borderRadius="sm"
            px={2}
            py={1}
          >
            <DeleteIcon color="red.500" />
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Checkbox
            className="custom-checkbox"
            color="white"
            spacing={10}
            colorScheme="green"
          >
            TODO 1
          </Checkbox>
          <Box
            border="1px"
            borderColor="red.500"
            borderRadius="sm"
            px={2}
            py={1}
          >
            <DeleteIcon color="red.500" />
          </Box>
        </Flex>
        {/* <Divider /> */}
        <Text align="center" mb={3} as="b" textColor="white" fontSize="2xl">
          DONE: 0
        </Text>
      </Flex>
      {/* </Container> */}
    </>
  );
};

export default Todo;
