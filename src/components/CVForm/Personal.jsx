import React from "react";
import Section from "../Utils/Section";
import Input from "../Utils/Input";
import TextArea from "../Utils/TextArea";
import FileInput from "../Utils/FileInput";

const Personal = ({ personalInfo, onChange }) => {
  return (
    <Section
      title="Personal Information"
      titlePadding="0.5rem"
      direction="column">
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="firstName"
        placeholder="First name"
        value={personalInfo.firstName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="lasttName"
        placeholder="Last name"
        value={personalInfo.lastName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="title"
        placeholder="Title"
        value={personalInfo.title}
      />
      <FileInput
        onChange={(e) => onChange(e)}
        name="photo"
        label="photo"
        value={personalInfo.photo}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="address"
        placeholder="Adress"
        value={personalInfo.address}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        value={personalInfo.phoneNumber}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name="career ambition"
        placeholder="Career Ambition"
        value={personalInfo.description}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name="skills"
        placeholder="Skills"
        value={personalInfo.skills}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name="hobbiesInterests"
        placeholder="Hobbies & Interests"
        value={personalInfo.hobbiesInterests}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name="referees"
        placeholder="Referees"
        value={personalInfo.referee}
      />
    </Section>
  );
};

export default Personal;
