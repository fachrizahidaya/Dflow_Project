import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { HasAcctButton } from "../../components/user/HasAcctButton";
import { RegisterUser } from "../../components/user/RegisterUser";
import { ReturnLogin } from "../../components/user/ReturnLogin";

export const Register = () => {
  return (
    <div>
      <Box>
        <Stack align={"center"}>
          <Box className="header" w={"390px"} h="56px">
            <ReturnLogin />
          </Box>
          <Box className="body" w={"390px"} h="auto">
            <RegisterUser />
          </Box>
          <Box className="footer" w={"390px"} h="57px">
            <HasAcctButton />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};
