import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { syncData } from "../../redux/productSlice";
import { useEffect } from "react";

export const Menu = () => {
  //   const [data, setData] = useState();
  const data2 = useSelector((state) => state.productSlice.value);
  const dispatch = useDispatch();

  const allProduct = async () => {
    try {
      const res = await Axios.get(`http://localhost:8000/product/listAll`);
      dispatch(syncData(res.data));
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allProduct();
  }, []);

  return (
    <div>
      <Wrap ml={"20px"} mr={"20px"}>
        {data2?.map((item) => {
          return (
            <Card w={"165px"} h="270px">
              <CardBody>
                <Center>
                  <Image
                    boxSize={100}
                    src={`http://localhost:8000/` + item.picture}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                </Center>
                <Stack mt="6" spacing="3">
                  <Heading size="xs">{item.productName}</Heading>;
                  <Text color="blue.600" fontSize="xs">
                    {new Intl.NumberFormat("IND", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.price)}
                  </Text>
                  <Center>
                    <Button w={"100px"} colorScheme="blue">
                      Add to cart
                    </Button>
                  </Center>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </Wrap>
    </div>
  );
};
