import { Box, Button, FormControl, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Login = () => {
  return (
    <div>
      <Text>Login</Text>
      <Box pl={"10px"} pr={"10px"} pt={"10px"} pb="10px" boxShadow={"base"}>
        <Stack spacing={"10px"}>
          <FormControl>
            <Input w={"300px"} placeholder="Username"></Input>
          </FormControl>
          <FormControl>
            <Input w={"300px"} placeholder="Password"></Input>
          </FormControl>
          {/* <ForgotPassButton /> */}
          <FormControl>
            <Button w={"200px"}>Login</Button>
          </FormControl>
        </Stack>
      </Box>
    </div>
  );
};
