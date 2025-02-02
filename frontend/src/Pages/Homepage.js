import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="130px 0 15px 0"
        borderRadius="10px"
        borderWidth="1px"
        boxShadow="lg"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          <big>X</big><b>HOST</b>
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="10px" borderWidth="1px" boxShadow="lg">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab
              _selected={{
                backgroundColor: "teal",
                color: "white",
                outline: "none !important",
              }}
            >
              Login
            </Tab>
            <Tab
              _selected={{
                backgroundColor: "teal",
                color: "white",
                outline: "none !important",
              }}
            >
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
