
import { Box, Flex, Input, VStack,Image, Button, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useUsercontext } from "../Context/UseUsercontext";
import { useNavigate } from "react-router-dom";


function Authhook() {
    const navigate=useNavigate();
    const [inputs,setinputs]=useState(
        {
            confirmpassword:"",
            password:"",
            email:"",
        }

    )
    
    const handelsubmit= async(e)=>
    {
        e.preventDefault();
    //   console.log(inputs)
      try
      {
        await Login(inputs.email,inputs.password)
        
        navigate('/')

      }
      catch(err)
      {
        alert(err)
       
      }
    }
    const handelgooglesignin=async()=>
    {
        try
        {
           await Googlesignin()
          
              navigate("/")
            
        }
        catch(err)
        {
            alert(err)
        }
    }

//   --------------------------------firbase-setup------------------------------------------
     
    const {Login,Googlesignin} =useUsercontext();

  return (
    <Flex>
       <Box>

       <Box border={"1px solid pink"} borderRadius={"10px"} padding={5} 
       w={{base:300,md:"400px"}}>

       <form method="post">     
            <VStack spacing={'4'} margin={"10px"} >


            <Input type="email" placeholder="Email" fontSize={14} 
            autoComplete="username"
            onChange={(e)=>setinputs({...inputs,email:e.target.value})}/>

            <Input type="password" placeholder="Password" fontSize={14}
            autoComplete="current-password"
            onChange={(e)=>setinputs({...inputs,password:e.target.value})}
            />

            
                <Button bgColor={"blue"} onClick={handelsubmit}>
                    Log In
                </Button>
                <Flex justifyContent={"center"} alignItems={"center"} padding={"10px"}>
                    <Box bgColor={"gray"} w={"130px"} h={"2px"}></Box>
                    <Box>OR</Box>
                    <Box bgColor={"gray"} w={"130px"} h={"2px"}></Box>
                </Flex>
                <Box onClick={handelgooglesignin}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={"5  "} cursor={"pointer"}>    
                <Box>
                    <Image src="/google.png" h={10}/>
                    </Box>
                    <Box>
                        <Text fontSize={"20px"} color={"blue.500"}> Login with google</Text>
                    </Box>

                    


                </Flex>
                </Box>
            </VStack>

        </form>
            </Box>

            

       </Box>

        
    </Flex>
  )
}

export default Authhook