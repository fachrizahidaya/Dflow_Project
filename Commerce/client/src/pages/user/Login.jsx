import {
  Box,
  Stack,
  Icon,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "../../components/user/LoginButton";
import { LoginUser } from "../../components/user/LoginUser";
import { RegisterButton } from "../../components/user/RegisterButton";
import { ReturnHome } from "../../components/user/ReturnHome";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Stack align={"center"}>
          <Box className="header" w={"390px"} h="56px">
            <ReturnHome />
          </Box>
          <Box className="body" w={"390px"} h="auto">
            <LoginUser />
          </Box>
          <Box className="footer" w={"390px"} h="57px">
            <RegisterButton />
          </Box>
        </Stack>
      </Box>
    </>
  );
};
