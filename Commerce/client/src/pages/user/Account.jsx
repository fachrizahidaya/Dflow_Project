import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../../components/user/Navbar";

export const Account = () => {
  return (
    <div>
      <Box>
        <Stack align={"center"}>
          <Box className="header" w={"390px"} h="92px"></Box>
          <Box className="body" w={"390px"} h="auto"></Box>
          <Box
            className="footer"
            bgColor={"salmon"}
            w={"390px"}
            h="57px"
            bottom="0.5px"
            pos="fixed"
            zIndex={2}
          >
            <Navbar />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};
