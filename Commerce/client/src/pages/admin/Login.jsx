import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Login } from "../../components/admin/LoginAdmin";

export const LoginAdmin = () => {
  return (
    <div>
      <Box>
        <Stack align={"center"}>
          <Box className="header" h={"92px"}></Box>
          <Box className="body">
            <Login />
          </Box>
          <Box className="footer"></Box>
        </Stack>
      </Box>
    </div>
  );
};
