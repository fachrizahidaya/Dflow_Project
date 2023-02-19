import { FormControl, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const HasAcctButton = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/account");
  };
  
  return (
    <div>
      <FormControl>
        <Text onClick={toLogin}>
          Have an account? <Text as={"u"}>Login here</Text>
        </Text>
      </FormControl>
    </div>
  );
};
