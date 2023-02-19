import {
  Avatar,
  Box,
  Button,
  Center,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { logoutUser } from "../../redux/userSlice";

export const AccountUser = () => {
  const dispatch = useDispatch();
  const { id, firstName, lastName } = useSelector(
    (state) => state.userSlice.value
  );

  const onPopout = () => {
    Swal.fire({
      title: "Are you sure want to Logout?",
      width: "370px",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I'm sure",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutUser());
        localStorage.removeItem("tokenUser");
        window.location.replace("/", 2000);
      }
    });
  };

  return (
    <div>
      <Box>
        <Stack>
          <Wrap ml={"20px"} mr={"20px"}>
            <Avatar name={firstName}></Avatar>
            <Box>
              <Text>
                {firstName} {lastName}
              </Text>
            </Box>
          </Wrap>
          <Center>
            <Button onClick={onPopout} w={"100px"}>
              Logout
            </Button>
          </Center>
        </Stack>
      </Box>
    </div>
  );
};
