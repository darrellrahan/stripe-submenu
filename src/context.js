import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider(prop) {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const openSidebar = () => setIsShowSidebar(true);
  const closeSidebar = () => setIsShowSidebar(false);

  const { children } = prop;

  return (
    <GlobalContext.Provider
      value={{ isShowSidebar, openSidebar, closeSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
