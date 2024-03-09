import { Box, Container, Flex, Button} from "@chakra-ui/react"
import { BeatLoader } from 'react-spinners';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify-modernize';
import 'react-toastify-modernize/dist/ReactToastify.css';

import Gauge from "../components/gauge";

function Controlhook() {
  const [btnstate,setbtnstate]=useState(false);
  const notify = (msg) => toast.success(msg,{theme:'dark',hideProgressBar:true});
  return (
    
             
    <Container>

      

      <Flex direction={{base:"column",md:"row"}}>
        {/* --------------- */}
        <Flex flex={1} direction={"column"}>
          <Box mt={10}>
            <Gauge value={50} textcolor={"red"} text={"Temp"}/>
            <Button
              onClick={() => notify("hello")} // Toggle btnstate on button click
              colorScheme='blue'
              isLoading={btnstate} // Use isLoading prop to show/hide loader
              spinner={<BeatLoader size={8} color='white' />}
              mt={5}
            >
             POWER
            </Button>
          </Box>
          <Box mt={10}>
            <Gauge value={50}  textcolor={"red"} text={"Temp"}/>
            <Button
              onClick={() => setbtnstate(!btnstate)} // Toggle btnstate on button click
              colorScheme='blue'
              isLoading={btnstate} // Use isLoading prop to show/hide loader
              spinner={<BeatLoader size={8} color='white' />}
              mt={5}
            >
             POWER
            </Button>
          </Box>
        </Flex>
        {/* ------------------- */}
        <Flex flex={1} direction={"column"}>
          <Box mt={10}>
            <Gauge value={50} textcolor={"red"} text={"Temp"}/>
            <Button
              onClick={() => setbtnstate(!btnstate)} // Toggle btnstate on button click
              colorScheme='blue'
              isLoading={btnstate} // Use isLoading prop to show/hide loader
              spinner={<BeatLoader size={8} color='white' />}
              mt={5}
            >
             POWER
            </Button>
          </Box>
          <Box mt={10} alignItems={"center"}>
            <Gauge  value={50} textcolor={"red"} text={"Temp"}/>
            <Button
              onClick={() => setbtnstate(!btnstate)} // Toggle btnstate on button click
              colorScheme='blue'
              isLoading={btnstate} // Use isLoading prop to show/hide loader
              spinner={<BeatLoader size={8} color='white' />}
              // ml={15}
              mt={5}
              
            >
             POWER
            </Button>
          </Box>
        </Flex>



        </Flex>
        <ToastContainer/>


    </Container>
  )
}

export default Controlhook