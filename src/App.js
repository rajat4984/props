import "./App.css";
import InputContainer from "./components/inpuTaker/InputContainer";
import PreviewContainer from "./components/preview/PreviewContainer";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Education from "./components/inpuTaker/Education";

function App() {
  const [inputText, setFirstName] = useState({
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
    uni: "",
    eduCity: "",
    degree: "",
    subject: "",
    eduFrom: "",
    eduTo: "",
  });

  const [educationArray, setEducationArray] = useState(["newElement"]);
  const [experienceArray, setExperienceArry] = useState(["newElement"]);

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
    else if (name === "uni") updatedValue = { uni: value };
    else if (name === "eduCity") updatedValue = { eduCity: value };
    else if (name === "degree") updatedValue = { degree: value };
    else if (name === "subject") updatedValue = { subject: value };
    else if (name === "eduFrom") updatedValue = { eduFrom: value };
    else if (name === "eduTo") updatedValue = { eduTo: value };

    setFirstName({
      ...inputText,
      ...updatedValue,
    });
  };

  const educationElementHandler = () => {
    const updatedArray = ["newElement"];
    setEducationArray(() => {
      const list = [...educationArray, ...updatedArray];
      return list;
    });
  };

  const experienceHandler = () => {
    const updatedArray = ["newElement"];
    setExperienceArry(() => {
      const list = [...experienceArray, ...updatedArray];
      return list;
    });
  };

  return (
    <div>
      <Navbar brand="CV-MAKER" />
      <Routes>
        <Route
          path="/"
          element={
            <InputContainer
              educationHandler={educationElementHandler}
              inputText={inputText}
              onChangeHandler={onChangeHandler}
              educationArray={educationArray}
              experienceArray={experienceArray}
              experienceHandler={experienceHandler}
            />
          }
        />
        <Route
          path="PreviewContainer"
          element={
            <PreviewContainer
              inputText={inputText}
              educationArray={educationArray}
              experienceArray={experienceArray}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
