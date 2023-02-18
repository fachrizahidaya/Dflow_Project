import React from "react";
import { Button } from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";

export const LoginButton = () => {
  return (
    <>
      <Button
        w={"50px"}
        h="32px"
        mt={"12px"}
        mr={"10px"}
        children={<BiLogIn />}
      ></Button>
    </>
  );
};
