import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ForgotPassButton } from "./ForgotPassButton";

export const LoginUser = () => {
  return (
    <>
      <Text>Login</Text>
      <Box pt={"10px"} pb="10px" boxShadow={"base"}>
        <Stack spacing={"10px"}>
          <FormControl>
            <Input w={"350px"} placeholder="Email"></Input>
          </FormControl>
          <FormControl>
            <Input w={"350px"} placeholder="Password"></Input>
          </FormControl>
          <ForgotPassButton />
          <FormControl>
            <Button w={"300px"}>Login</Button>
          </FormControl>
        </Stack>
      </Box>
    </>
  );
};
