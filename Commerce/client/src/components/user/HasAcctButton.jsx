import { FormControl, Text } from "@chakra-ui/react";
import React from "react";

export const HasAcctButton = () => {
  return (
    <div>
      <FormControl>
        <Text>
          Have an account? <Text as={"u"}>Login here</Text>
        </Text>
      </FormControl>
    </div>
  );
};
