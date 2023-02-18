import { FormControl, Text } from "@chakra-ui/react";
import React from "react";

export const RegisterButton = () => {
  return (
    <>
      <FormControl>
        <Text>
          Don't have account? <Text as={"u"}>Register</Text>
        </Text>
      </FormControl>
    </>
  );
};
