import {
  Box,
  // Text,
  Container,
  // Checkbox,
  // Flex,
  // Input,
  // Button,
} from "@chakra-ui/react";
// import { DeleteIcon } from "@chakra-ui/icons";
import "./index.css";

import Heading from "./components/Heading";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <Box bg="#24283b" h="100vh" p="4" alignItems="center">
        <Container>
          <Heading />
          <Todo />
          <AddTodo />
        </Container>
      </Box>
    </>
  );
}

export default App;
