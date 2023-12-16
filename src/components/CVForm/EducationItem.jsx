import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";

const EducationItem = ({ id, educationItem, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="universityName"
        placeholder="School"
        value={educationItem.universityName}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={educationItem.city}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="degree"
        placeholder="Level"
        value={educationItem.degree}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="subject"
        placeholder="Certificate"
        value={educationItem.subject}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="From"
        value={educationItem.from}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="To"
        value={educationItem.to}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </>
  );
};

export default EducationItem;
