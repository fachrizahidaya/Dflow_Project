import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export const Product = () => {
  return (
    <div>
      <Box
        pl={"10px"}
        pr={"10px"}
        pt={"10px"}
        pb="10px"
        w={"400px"}
        boxShadow={"base"}
      >
        <Text>Add Product</Text>
        <Stack spacing={"10px"}>
          <FormControl>
            <Input w={"300px"} placeholder="Product Name"></Input>
          </FormControl>
          <FormControl>
            <InputGroup ml={"40px"}>
              <Input w={"230px"} placeholder="Weight"></Input>
              <InputRightAddon children="gram"></InputRightAddon>
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup ml={"40px"}>
              <InputLeftElement children="Rp"></InputLeftElement>
              <Input w={"300px"} placeholder="Price"></Input>
            </InputGroup>
          </FormControl>
          <FormControl>
            <Textarea w={"300px"} placeholder="Description"></Textarea>
          </FormControl>

          <FormControl>
            <Button w={"200px"}>Save</Button>
          </FormControl>
        </Stack>
      </Box>
    </div>
  );
};
