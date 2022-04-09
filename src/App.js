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
    adress: "",
    phone: "",
    email: "",
    desc: "",
    expPosition: "",
    expCompany: "",
    expCity: "",
    expFrom: "",
    expTo: "",
  });

  const onChangeHandler = (e) => {
    let updatedValue = {};
    let name = e.target.name;
    let value = e.target.value;

    if (name === "fname") updatedValue = { firstName: e.target.value };
    else if (name === "lname") updatedValue = { lastName: value };
    else if (name === "title") updatedValue = { title: value };
    else if (name === "adress") updatedValue = { adress: value };
    else if (name === "phone") updatedValue = { phone: value };
    else if (name === "email") updatedValue = { email: value };
    else if (name === "desc") updatedValue = { desc: value };
    else if (name === "expPosition") updatedValue = { expPosition: value };
    else if (name === "expCompany") updatedValue = { expCompany: value };
    else if (name === "expCity") updatedValue = { expCity: value };
    else if (name === "expFrom") updatedValue = { expFrom: value };
    else if (name === "expTo") updatedValue = { expTo: value };

    console.log(updatedValue);
    SetFirstName({
      ...inputText,
      ...updatedValue,
    });
    console.log("IN on changeHandler");
    console.log(inputText);
  };

  return (
    <div>
      <Navbar brand="CV-MAKER" />
      <Routes>
        <Route
          path="/"
          element={
            <InputContainer
              inputText={inputText}
              onChangeHandler={onChangeHandler}
            />
          }
        />
        <Route
          path="PreviewContainer"
          element={<PreviewContainer inputText={inputText} />}
        />
      </Routes>
    </div>
  );
}

export default App;
