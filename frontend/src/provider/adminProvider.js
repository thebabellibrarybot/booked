import React, { useState} from "react";

import { adminContext } from "../context/adminContext";

const AdminProvider = ({children}) => {

    const [isAdmin, setIsAdmin] = useState('');

    return (
        <adminContext.Provider value = {{isAdmin, setIsAdmin}}>
            {children}
        </adminContext.Provider> 
    )
}

export default AdminProvider;