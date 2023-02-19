import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../../components/user/Navbar";
import { LoginUser } from "../../components/user/LoginUser";
import { RegisterButton } from "../../components/user/RegisterButton";
import { AccountUser } from "../../components/user/AccountUser";
import { useSelector } from "react-redux";

export const Account = () => {
  const tokenLocalStorage = localStorage.getItem("tokenUser");
  

  return (
    <div>
      <Box>
        <Stack align={"center"}>
          <Box className="header" w={"390px"} h="92px"></Box>
          <Box className="body" w={"390px"} h="auto">
            {tokenLocalStorage ? <AccountUser /> : <LoginUser />}
          </Box>
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
