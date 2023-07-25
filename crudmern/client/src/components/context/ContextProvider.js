import React, { createContext, useState } from "react";
export const addData = createContext();
export const updateData = createContext();
export const deleteData = createContext();
const ContextProvider = ({ children }) => {
  const [userAdd, setUserAdd] = useState("");
  const [update, setUpdate] = useState("");
  const [userdelete, setUserDelete] = useState("");
  return (
    <>
      <addData.Provider value={{ userAdd, setUserAdd }}>
        <updateData.Provider value={{ update, setUpdate }}>
          <deleteData.Provider value={{ userdelete, setUserDelete }}>
            {children}
          </deleteData.Provider>
        </updateData.Provider>
      </addData.Provider>
    </>
  );
};

export default ContextProvider;
