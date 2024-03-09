  import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 import PropType from "prop-types" 
  export function Toast(props)
  {
    useEffect(()=>
    {
      const notify = () => toast(props.message);
      notify()
    },[props])
    
    return (
      <div>
        <ToastContainer />
        
      </div>
    );
  }

  Toast.propTypes=
  {
    message:PropType.any.isRequired
  }