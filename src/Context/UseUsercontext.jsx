import { useContext } from "react";
import { Usercontext } from "./Usercontext";

export   const useUsercontext=()=>
{
    return useContext(Usercontext);

}