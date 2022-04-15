import "./App.css";
import InputContainer from "./components/inpuTaker/InputContainer";
import PreviewContainer from "./components/preview/PreviewContainer";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const stateObject = {
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
  };

  const [stateArray, setStateArray] = useState([stateObject]);
  const [imageUrl, setImageUrl] = useState({profileImage:"../../images/avatar.png"});
  const [educationArray, setEducationArray] = useState(["newElement"]);
  const [experienceArray, setExperienceArry] = useState(["newElement"]);

  const onChangeHandler = (index, event) => {
    const values = [...stateArray];
    values[index][event.target.name] = event.target.value;
    setStateArray(values);
  };

  const elementAddHandler = (e) => {
    if (e.target.name === "eduAddBtn") {
      const updatedArray = ["newElement"];
      setEducationArray(() => {
        const list = [...educationArray, ...updatedArray];
        return list;
      });
      setStateArray([...stateArray, stateObject]);
    } else if (e.target.name === "expAddBtn") {
      const updatedArray = ["newElement"];
      setExperienceArry(() => {
        const list = [...experienceArray, ...updatedArray];
        return list;
      });
      setStateArray([...stateArray, stateObject]);
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
      const tempArray = [...experienceArray];
      tempArray.pop();
      setExperienceArry(() => {
        const list = [...tempArray];
        return list;
      });
    }
  };

  const imageChangeHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState===2){
        setImageUrl({profileImage : reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  return (
    <div>
      <Navbar brand="CV-MAKER" />
      <Routes>
        <Route
          path="/"
          element={
            <InputContainer
              imageChangeHandler={imageChangeHandler}
              elementAddHandler={elementAddHandler}
              stateArray={stateArray}
              elementDeleteHandler={elementDeleteHandler}
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
              imageUrl={imageUrl}
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
