import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import About from "../components/About";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import WorkplaceMentalHealthPredictor from "../components/Answer";
import Result from "../components/Result";
import Answer from "../components/Answer";
import ProjectInsight from "../components/ProjectInsight";

function App() {
  return (
    // <Answer />
   
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/answer" element={<WorkplaceMentalHealthPredictor />} />
        <Route path="/output" element={<Result/>}/>
        <Route path="/getstarted" element={<ProjectInsight/>}/>
      </Routes>
    </Router>
  );
}

export default App;
