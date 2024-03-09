import { Box, VStack} from "@chakra-ui/react"

function Records_daily()
 {
  
  return (
        
           <VStack  width={"calc(150%)"}>
            {[...Array(10).keys()].map((day) => (
        <Box
          key={`day${day + 1}`}
          textAlign="center"
          padding="10px"
          width="full"
          border="2px solid black"
          borderRadius={"20px"}
        >
          <h1>day{day + 1}</h1>
        </Box>
      ))}
        </VStack>
   
  )
}

export default Records_daily