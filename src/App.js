import "./App.css";
import InputContainer from "./components/inpuTaker/InputContainer";
import PreviewContainer from "./components/preview/PreviewContainer";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [inputText, SetFirstName] = useState({
    firstName: "",
    lastName: "",
    title: "",
  });

  const hello = (e) => {
    let updatedValue = {};
    if (e.target.name === "fname") {
      updatedValue = { firstName: e.target.value };
    } else if (e.target.name === "lname") {
      updatedValue = { lastName: e.target.value };
    } else if (e.target.name === "title") {
      updatedValue = { title: e.target.value };
    }
    console.log(updatedValue);
    SetFirstName({
      ...inputText,
      ...updatedValue,
    });
    console.log(inputText);
  };
  return (
    <div>
      <Navbar brand="CV-MAKER" />
      <Routes>
        <Route path="/" element={<InputContainer />} />
        <Route path="PreviewContainer" element={<PreviewContainer />} />
      </Routes>
    </div>
  );
}

export default App;
