import { Box, Flex } from '@chakra-ui/react'
import PropTypes from "prop-types"
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
function Pagelayout({children}) {
  const location= useLocation();
   
  return (
    <>
        <Flex>
        <Box>
            {location.pathname=='/auth' ?null:(<Box w={{base:"40px",md:"240px"}}>
                <Sidebar/>
         </Box>)}
        </Box>

          <Box flex={1} w={{base:"calc(100%-40px)",md:"calc(100%-240px)"}}
         mr={{base:"30px",md:"none"}}>
     {children}
      </Box>

        </Flex>
        
    </>
  )
}
Pagelayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Pagelayout