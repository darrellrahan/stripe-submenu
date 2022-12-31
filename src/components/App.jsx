import React from "react";
import { AppProvider } from "../context";
import Header from "./Header";
import Section from "./Section";
import Sidebar from "./Sidebar";

function App() {
  return (
    <AppProvider>
      <Header />
      <Section />
      <Sidebar />
    </AppProvider>
  );
}

export default App;
