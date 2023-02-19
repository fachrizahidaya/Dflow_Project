import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Axios from "axios";
import { ForgotPassButton } from "./ForgotPassButton";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { RegisterButton } from "./RegisterButton";

export const LoginUser = () => {
  const inputEmail = useRef("");
  const inputPassword = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.userSlice.value)

  const onLogin = async () => {
    try {
      const user = {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      };
      const res = await Axios.post(`http://localhost:8000/user/login`, user);
      dispatch(
        loginUser({
          email: res.data.isAccountExist.email,
          id: res.data.isAccountExist.id,
        })
      );
      console.log(res.data)
      localStorage.setItem("tokenUser", res.data.token);
      navigate("/");
      let timerInterval;
      Swal.fire({
        width: "370px",
        timer: 2000,
        title: "Get Ready",
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Account not found or Incorrect Password",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(err);
    }
  };

  return (
    <>
      <Text>Login</Text>
      <Box pt={"10px"} pb="10px" boxShadow={"base"}>
        <Stack spacing={"10px"}>
          <FormControl>
            <Input ref={inputEmail} w={"350px"} placeholder="Email"></Input>
          </FormControl>
          <FormControl>
            <Input
              type={"password"}
              ref={inputPassword}
              w={"350px"}
              placeholder="Password"
            ></Input>
          </FormControl>
          <ForgotPassButton />
          <FormControl>
            <Button onClick={onLogin} w={"300px"}>
              Login
            </Button>
          </FormControl>
        </Stack>
        <RegisterButton />
      </Box>
    </>
  );
};
