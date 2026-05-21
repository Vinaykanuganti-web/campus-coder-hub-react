import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import FullStack from "./pages/FullStack";
import MachineLearning from "./pages/MachineLearning";
import DataScience from "./pages/DataScience";
import DataAnalytics from "./pages/DataAnalytics";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import GenAI from "./pages/GenAI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />

        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/generative-ai" element={<GenAI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;