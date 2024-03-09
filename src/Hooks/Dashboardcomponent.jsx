import { Box, Container, Flex } from '@chakra-ui/react'
import Gauge from '../components/gauge'
import Dashboard_horizontal from '../components/Dashboard_horizontal'
import Dashboardpie from '../components/Dashboardpie'
import { useUsercontext } from '../Context/UseUsercontext'

function Dashboardcomponent() {
  const {newuser}=useUsercontext()

  console.log(newuser)

  return (
    <>
    <Container>
           <Flex gap={"20px"} direction={{base:"column",md:'row'}} alignItems={"center"}>
        <Box width={{base:"250px",md:"280px"}}>
            <Dashboardpie d1={1150} d2={1100} d3={400}/>
        </Box>
         <Box mt={{base:"none",md:"37px"}}>
            <Gauge text={"Temp"} value={50} textcolor={"white"}/>
         </Box>
         
     </Flex>
     <Box display={{base:"none",md:"block"}}>
     <Dashboard_horizontal d1={510} d2={200} d3={400}/>
    </Box>
    {/* --end-- */}
    </Container>

    </>
  )
}

export default Dashboardcomponent