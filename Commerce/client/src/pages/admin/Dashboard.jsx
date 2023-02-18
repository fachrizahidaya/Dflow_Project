import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../../components/admin/Sidebar";

export const Dashboard = () => {
  return (
    <div>
      <Flex>
        <Box w={"273px"} h="760px" className="side">
          <Sidebar />
        </Box>
        <Grid>
          <Box w={"1420px"} h="100px" className="header">
            <Button>la</Button>
          </Box>
          <Box w={"1420px"} h="600px" className="content">
            <Button>la</Button>
          </Box>
          <Box w={"1420px"} h="60px" className="footer">
            <Button>la</Button>
          </Box>
        </Grid>
      </Flex>
    </div>
  );
};
