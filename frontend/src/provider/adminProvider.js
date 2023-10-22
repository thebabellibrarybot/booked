import React, { useState} from "react";

import { adminContext } from "../context/adminContext";

const AdminProvider = ({children}) => {

    const [isAdmin, setIsAdmin] = useState('');
    /*
        google info key (used for making requests about availability, scheduling etc)
        
    */

    return (
        <adminContext.Provider value = {{isAdmin, setIsAdmin}}>
            {children}
        </adminContext.Provider> 
    )
}

export default AdminProvider;