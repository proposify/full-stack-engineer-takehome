import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Editor from "./Editor";
import LoginBox from "./LoginBox";
export default function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <LoginBox />
        <Editor />
      </Box>
    </Container>
  );
}
