import { Box, Container, Flex } from "@chakra-ui/react"
import LineChart from "../components/LineChart"
import Records_daily from "../components/Records_daily"

function Analyticshook() {
  return (
    <Container  maxW={"calc(100%)"} mr={0}  >
        <Flex width={{base:"400px",md:"100%"}}
         gap={"10px"}
        
         direction={{base:"column",md:"row"}}
         >
 
          <Box bgColor={"white"} 
          width={{base:"600px",md:"900px"}}
          height={{base:"none",md:"100ps"}}
          // margin={"auto"}
          // flex="1" 
          >
              {/* data: [65, 59, 80, 81, 56, 55, 10,30] */}
              {/* data: [28, 48, 40, 19, 86, 27, 90,10] */}
              <LineChart 
              d11={65} d12={59} d13={80} d14={81} d15={56} d16={55} d17={10} d18={30}
              d21={28} d22={48} d23={40} d24={19} d25={86} d26={27} d27={90} d28={10 }
              />
          </Box>

   {/* -------------------------------- */}
          

          <Box width={"200px"}>
            <Records_daily/>
          </Box>

          
 {/* -------------------------------- */}

        </Flex>
        


    </Container>
  )
}

export default Analyticshook