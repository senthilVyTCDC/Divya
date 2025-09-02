// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StudentTable from "./components/StudentTable";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isVisible={sidebarVisible} />
      <StudentTable />
    </>
  );
}

export default App;
