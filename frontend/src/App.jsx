import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import Edit from "./pages/Edit";
import View from "./pages/View";
import Delete from "./pages/Delete";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </>
  );
}

export default App;
