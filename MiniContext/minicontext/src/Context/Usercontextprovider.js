import React from "react";
import Usercontext from "./Usercontext";

const usercontextprovider = ({children}) => {
    const[user,setuser] = React.useState(null)
    return(
        < Usercontext.Provider value={{user,setuser}}>
        {children}
        </ Usercontext.Provider>
    )
        
    

}


export default usercontextprovider