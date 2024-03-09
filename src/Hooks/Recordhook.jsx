import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Dasboard_chars from "../components/Dasboard_chars";
import Dashboard_horizontal from "../components/Dashboard_horizontal";
import Dashboardpie from "../components/Dashboardpie";

function Recordhook() {
    const currentTimestamp = Date.now();
    const formattedDate = new Date(currentTimestamp).toLocaleDateString();
  
    const formattedTime= new Date(currentTimestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    return (
      <>
        <Flex gap={"20px"} mt={"20px"} 
        flexDir={{md:'row',base:'column'}}>
        <VStack gap={"20px"}>
          
          <Box borderRadius={"10px"} _hover={{bgColor:'#002b48'}}>
  
            <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
             
          </Box>
          <Box borderRadius={"10px"} _hover={{bgColor:'#002b48'}}>
  
          <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
             
          </Box>
          <Box borderRadius={"10px"} _hover={{bgColor:'#002b48'}}>
  
          <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
          </Box>
          <Box borderRadius={"10px"} _hover={{bgColor:'#002b48'}}>
  
          <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
             
          </Box>
          <Box borderRadius={"10px"} _hover={{bgColor:'#002b48'}}>
  
          <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
             
          </Box>
  
          <Box borderRadius={"10px"} _hover={{bgColor:'#002b48'}}>
  
          <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
             
          </Box>
  
          <Box borderRadius={"10px"} _hover={{bgColor:'#002b48'}} >
  
          <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
          </Box>
  
          <Box borderRadius={"10px"} _hover={{bgColor:'#002b48'}} >
  
          <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
             
          </Box>
  
          <Box borderRadius={"10px"} _hover={{bgColor:'#002b48'}}>
  
          <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
             
          </Box>
  
          <Box borderRadius={"10px"} _hover={{bgColor:'#002b48'}}>
  
          <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
             
          </Box>
  
        </VStack>
  
        {/* ---------------------------------------------------------- */}
  
        <Container>
  
          <Flex gap={"20px"} flexDir={{md:'row',base:'column'}}>
            <Box width={{base:"300px",md:"none"}}>

             <Dashboard_horizontal d1={50} d2={100} d3={200}/>
            </Box>
             <Box width={{base:"250px",md:"280px"}}>

             <Dashboardpie d1={50} d2={100} d3={200}/>
             </Box>
          </Flex>
          <Box 
          width={{base:"300px",md:"full"}}>
          <Dasboard_chars d1={50} d2={100} d3={200}/>
          </Box>
          
          </Container>
  
        </Flex>
        </>
    )
}

export default Recordhook