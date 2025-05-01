import React from "react";
import { Box, TextField, Button } from "@material-ui/core";

const LoginBox = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box display="flex" alignItems="center" style={{ gap: 20 }}>
        <TextField label="Username" />
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginBox;
