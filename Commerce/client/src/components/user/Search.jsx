import {
  Input,
  Icon,
  Box,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";

export const Search = () => {
  return (
    <>
      <InputGroup mt={"10px"} ml={"10px"}>
        <Input w={"300px"} h="38px" placeholder="Search here"></Input>
        <InputRightElement mr={"20px"} children={<BiSearch />}></InputRightElement>
      </InputGroup>
    </>
  );
};
