import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { BiMap } from "react-icons/bi";

export const SetAddress = () => {
  return (
    <div>
      <Flex ml="10px" mt={"10px"} as={"button"} variant={"unstyled"}>
        <BiMap size={20} /> Please login to Set your Address
      </Flex>
    </div>
  );
};
