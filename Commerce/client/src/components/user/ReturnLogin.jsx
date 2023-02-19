import { Text, Icon } from "@chakra-ui/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const ReturnLogin = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/account");
  };

  return (
    <div>
      <>
        <Text w={"77.68px"} h="32px" mt={"10px"} onClick={toLogin}>
          <Icon boxSize={3} as={BiArrowBack} alignContent="start" />
          Login
        </Text>
      </>
    </div>
  );
};
