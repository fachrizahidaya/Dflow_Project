import { FormControl, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const RegisterButton = () => {
  const navigate = useNavigate();

  const toRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <FormControl>
        <Text onClick={toRegister}>
          Don't have account? <Text as={"u"}>Register</Text>
        </Text>
      </FormControl>
    </>
  );
};
