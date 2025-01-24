'use client'

import React, { createContext, useState, useContext } from 'react';
import { addNewUserInitialState } from '@/utils';
const ContextProvider = createContext();

export const useAppContext = () => useContext(ContextProvider);

export const AppContextProvider = ({ children }) => {
      const[openPopUp,setOpenPopUp]=useState(false);
      const [newUserData, setNewUserData] = useState(addNewUserInitialState);
  const [editID, setEditID] = useState(null); 
         
  return (
    <ContextProvider.Provider value={{ editID, setEditID,openPopUp,setOpenPopUp,newUserData,setNewUserData }}>
      {children}
    </ContextProvider.Provider>
  );
};


export default AppContextProvider;
