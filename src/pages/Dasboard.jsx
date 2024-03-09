import { Box, Container, Flex } from "@chakra-ui/react"
import Dashboardcomponent from "../Hooks/Dashboardcomponent"

function Dasboard() {

  return (
   
     <>
        <Container mt={{base:"50px",md:"50px"}}
        
        ml={{base:"0",md:"0"}}  overflowY={{base:"auto",md:"visible"} }
        maxHeight={{base:"100%",md : "auto"}}>           <Flex direction={{base:"column",md:"row"}} gap={"20px"}>
            <Box>
              <Dashboardcomponent/>
            </Box>
            <Box>
              <Dashboardcomponent/>
            </Box>
           </Flex>
        </Container>
     </>
     
  )
}

export default Dasboard