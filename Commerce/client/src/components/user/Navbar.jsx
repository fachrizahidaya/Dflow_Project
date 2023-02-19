import {
  Badge,
  Center,
  Flex,
  VStack,
  Icon,
  Text,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import {
  BiCart,
  BiCartAlt,
  BiHome,
  BiHomeAlt,
  BiReceipt,
  BiSpreadsheet,
  BiUser,
  BiUserCircle,
} from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const nav = [
    {
      icon1: BiHome,
      icon2: BiHomeAlt,
      icon3: "",
      name: "Home",
      url: "/",
    },
    {
      icon1: BiCartAlt,
      icon2: BiCart,
      icon3: Badge,
      name: "Cart",
      url: `/cart`,
    },
    {
      icon1: BiSpreadsheet,
      icon2: BiReceipt,
      icon3: "",
      name: "Order",
      url: "/transaction",
    },
    {
      icon1: BiUserCircle,
      icon2: BiUser,
      icon3: "",
      name: "Account",
      url: "/account",
    },
  ];

  const toPage = (url) => {
    navigate(url);
  };

  return (
    <div>
      <Center>
        <Badge
          zIndex={2}
          borderRadius="2xl"
          mb={"10px"}
          ml="100px"
          color={"gray.800"}
        >
          {/* {data?.length} */}
        </Badge>
        <Badge
          zIndex={2}
          borderRadius="2xl"
          mb={"10px"}
          ml="50px"
          color={"gray.800"}
        >
          {/* {data2?.length} */}
        </Badge>
      </Center>
      <Center>
        <Flex
          mt={"50px"}
          w={[300, 350, 390]}
          h="70px"
          dropShadow="2xl"
          position="fixed"
        >
          <HStack
            justifyContent="space-evenly"
            align="center"
            w={[300, 350, 390]}
          >
            {nav.map((item, index) => {
              return (
                <VStack
                  w="50px"
                  h="70px"
                  justifyContent="center"
                  _hover={{ cursor: "pointer" }}
                  borderTop={location.pathname === item.url ? "4px" : ""}
                  onClick={() => toPage(item.url, index)}
                  key={index}
                  className={location.pathname === item.url ? "active" : ""}
                >
                  <Icon
                    className="icon"
                    w={5}
                    h={5}
                    as={
                      location.pathname === item.url ? item.icon2 : item.icon1
                    }
                  />

                  {location.pathname === item.url ? (
                    <Text
                      justifyItems="center"
                      className="name"
                      fontSize="small"
                      fontWeight="bold"
                    >
                      {item.name}
                    </Text>
                  ) : null}
                </VStack>
              );
            })}
          </HStack>
        </Flex>
      </Center>
    </div>
  );
};
