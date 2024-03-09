import { extendTheme } from "@chakra-ui/react";


 const Chakratheme=extendTheme({
    // Your custom theme configuration
    styles: {
      global: {
        body: {
          
          fontFamily: 'body', 
          color: 'blue.500', 
          // bg:"#1a202c"
          bg:'#031525'
        },
      },
    },
  });

  export default Chakratheme;