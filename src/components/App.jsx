import React from "react";
import { AppProvider } from "../context";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <AppProvider>
      <Header />
      <Sidebar />
    </AppProvider>
  );
}

export default App;
