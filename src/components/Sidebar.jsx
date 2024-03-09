import { Box, Flex,Text } from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdControlCamera } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

// import { Link } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";
import { useUsercontext } from '../Context/UseUsercontext';
function Sidebar() {

  const {Logout}=useUsercontext();

  const handlelogout=async()=>
  {
    try
    {
      await Logout()
      // alert("suc")
    }
    catch(err)
    {
      alert(err)
      console.log(err)
    }
  }





  const navigate=useNavigate();
  return (
    <>
 <Box
  px={{base:"2",md:"4"}}
  height={"100vh"}
  py={8}
  top={0}
  left={0}
  borderRight={"1px solid black"}
  position={"Fixed"}
  >
     <Flex  h={"full"}  flexDirection={"column"} gap={"50px"} 
 alignItems={{base:"center",md:"flex-start"}}>
   <Box cursor={"pointer"} onClick={()=>{navigate("/")}}>
     <Flex alignItems={"center"} gap={"20px"} >
     <RxDashboard size={"20px"}/>
     <Text fontWeight={"14px"} fontSize={"larger"} 
              display={{base:"none",md:"block"}}>Dasboard</Text>  

     </Flex>
   </Box>

   <Box cursor={"pointer"} onClick={()=>{navigate("/analytics")}}>
     <Flex alignItems={"center"} gap={"20px"} >
     <TbDeviceAnalytics />
     <Text fontWeight={"14px"} fontSize={"larger"} 
              display={{base:"none",md:"block"}}>Analytics</Text>  

     </Flex>
   </Box>

   <Box cursor={"pointer"} onClick={()=>{navigate("/controls")}}>
     <Flex alignItems={"center"} gap={"20px"}>
     <MdControlCamera />
     <Text fontWeight={"14px"} fontSize={"larger"} 
              display={{base:"none",md:"block"}}>Controls</Text>  

     </Flex>
   </Box>

   <Box cursor={"pointer"} onClick={()=>{navigate("/records")}}>
     <Flex alignItems={"center"} gap={"20px"}>
        <FaFileAlt />
        <Text fontWeight={"14px"} fontSize={"larger"} 
              display={{base:"none",md:"block"}}>Records</Text>  

     </Flex>

   </Box>
    
   <Box cursor={"pointer"} 
   onClick={handlelogout}
   marginTop={{base:"250px",md:"300px"}}>
     <Flex alignItems={"center"} gap={"20px"}>
        <CiLogout />
        <Text fontWeight={"14px"} fontSize={"larger"} 
              display={{base:"none",md:"block"}}>Logout</Text>  

     </Flex>

   </Box>

   </Flex>
    
  </Box>
    </>
  )
}

export default Sidebar