import "./App.css";
import InputContainer from "./components/inpuTaker/InputContainer";
import PreviewContainer from "./components/preview/PreviewContainer";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [inputText, setInputText] = useState({
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

  const [stateArray, setStateArray] = useState([inputText]);

  const [educationArray, setEducationArray] = useState(["newElement"]);
  const [experienceArray, setExperienceArry] = useState(["newElement"]);

  const onChangeHandler = (e) => {
    console.log("Id")
    console.log(e.target.parentNode.id)
    let updatedValue = {};
    let name = e.target.name;
    let value = e.target.value;

    updatedValue = { [name]: value };

    let targetState = stateArray[e.target.parentNode.id];
    setStateArray([
      {
        ...targetState,
        ...updatedValue,
      },
    ]);
  };

  const elementAddHandler = (e) => {
    if (e.target.name === "eduAddBtn") {
      const updatedArray = ["newElement"];
      setEducationArray(() => {
        const list = [...educationArray, ...updatedArray];
        return list;
      });
      setStateArray([...stateArray, inputText]);
    } else if (e.target.name === "expAddBtn") {
      const updatedArray = ["newElement"];
      setExperienceArry(() => {
        const list = [...experienceArray, ...updatedArray];
        return list;
      });
    }
  };

  const elementDeleteHandler = (e) => {
    if (e.target.name === "eduDeleteBtn") {
      const tempArray = [...educationArray];
      tempArray.pop();
      setEducationArray(() => {
        const list = [...tempArray];
        return list;
      });
    } else if (e.target.name === "expDeleteBtn") {
      console.log("BUtton clicked");
      const tempArray = [...experienceArray];
      tempArray.pop();
      setExperienceArry(() => {
        const list = [...tempArray];
        return list;
      });
    }
  };

  return (
    <div>
      <Navbar brand="CV-MAKER" />
      <Routes>
        <Route
          path="/"
          element={
            <InputContainer
              elementAddHandler={elementAddHandler}
              stateArray={stateArray}
              elementDeleteHandler={elementDeleteHandler}
              inputText={inputText}
              onChangeHandler={onChangeHandler}
              educationArray={educationArray}
              experienceArray={experienceArray}
            />
          }
        />
        <Route
          path="PreviewContainer"
          element={
            <PreviewContainer
              inputText={inputText}
              stateArray={stateArray}
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
