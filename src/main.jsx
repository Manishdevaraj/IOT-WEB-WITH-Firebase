import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Chakratheme from './services/Chakratheme.jsx'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <ChakraProvider theme={Chakratheme} >
     <App />
    </ChakraProvider>

    </BrowserRouter>
   
  </React.StrictMode>,
)
