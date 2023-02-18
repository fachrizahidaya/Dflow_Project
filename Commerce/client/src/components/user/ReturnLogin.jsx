import { Text, Icon } from "@chakra-ui/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

export const ReturnLogin = () => {
  return (
    <div>
      <>
        <Text w={"77.68px"} h="32px" mt={"10px"}>
          <Icon boxSize={3} as={BiArrowBack} alignContent="start" />
          Login
        </Text>
      </>
    </div>
  );
};
