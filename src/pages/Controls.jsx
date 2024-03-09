import { Container } from "@chakra-ui/react"
import Controlhook from "../Hooks/Controlhook"


function Controls() {
  return (
    <>
    <Container 
    
    overflowY={{base:"auto",md:"visible"} }
        maxHeight={{base:"100%",md : "auto"}} >
     <Controlhook/>
        </Container>
    

    </>
  )
}

export default Controls