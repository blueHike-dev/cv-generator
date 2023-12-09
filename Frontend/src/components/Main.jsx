import React, { useState } from "react";
import emptyCV from "./utils/emptyCV";
import CVForm from "./CVForm/CVForm";

const Main = () => {
  const [cv, setCv] = useState(emptyCV);

  const handleChangePersonal = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      handleChangeFile(e);
      return;
    }

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <CVForm handleChangePersonal={handleChangePersonal} />
    </div>
  );
};

export default Main;
