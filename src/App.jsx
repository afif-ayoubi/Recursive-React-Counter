import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/utilities.css";
import "./styles/colors.css";
import Main from "./pages/main";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
