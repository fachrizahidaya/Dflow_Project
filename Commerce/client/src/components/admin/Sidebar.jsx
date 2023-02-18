import { Avatar, Badge, Button, Stack } from "@chakra-ui/react";
import React from "react";

export const Sidebar = () => {
  return (
    <div>
      <Stack align={"center"}>
        <Avatar name="riza"></Avatar>
        <Badge>Riza</Badge>
        <Button>lu</Button>
        <Button>lu</Button>
        <Button>lu</Button>
        <Button>lu</Button>
      </Stack>
    </div>
  );
};
