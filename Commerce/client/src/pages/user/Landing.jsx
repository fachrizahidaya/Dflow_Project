import { Box, Center, Flex, Input, Stack } from "@chakra-ui/react";
import React from "react";
import { LoginButton } from "../../components/user/LoginButton";
import { Search } from "../../components/user/Search";
import { SetAddress } from "../../components/user/SetAddress";

export const Landing = () => {
  return (
    <>
      <Box>
        <Stack align={"center"}>
          <Box className="header" w={"390px"} h="92px">
            <Flex>
              <Search />
              <LoginButton />
            </Flex>
            <SetAddress />
          </Box>
          <Box className="body" bgColor={"black"} w={"390px"} h="auto"></Box>
          <Box className="footer" bgColor={"salmon"} w={"390px"} h="57px"></Box>
        </Stack>
      </Box>
    </>
  );
};
