import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const RegisterUser = () => {
  return (
    <div>
      <Text>Register</Text>
      <Box pt={"10px"} pb="10px" boxShadow={"base"}>
        <Stack spacing={"10px"}>
          <FormControl>
            <Input w={"350px"} placeholder="First Name"></Input>
          </FormControl>
          <FormControl>
            <Input w={"350px"} placeholder="Last Name"></Input>
          </FormControl>
          <FormControl>
            <Input w={"350px"} placeholder="Email"></Input>
          </FormControl>
          <FormControl>
            <Input w={"350px"} placeholder="Password"></Input>
          </FormControl>
          <FormControl>
            <Input w={"350px"} placeholder="Confirm Password"></Input>
          </FormControl>
          <FormControl>
            <Button w={"300px"}>Register</Button>
          </FormControl>
        </Stack>
      </Box>
    </div>
  );
};
