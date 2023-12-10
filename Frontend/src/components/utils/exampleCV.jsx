import { v4 as uuidv4 } from "uuid";

const exampleCV = {
  personalInfo: {
    firstName: "Simon",
    lastName: "Muiruri",
    title: "Software Developer",
    photo: examplePhoto,
    address: "",
    PhoneNumber: "+254798296778",
    email: "wambuisimon712@gmail.com",
    description: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "Software Developer",
      company: "blueHike Inc.",
      city: "Nairobi City",
      from: "2023",
      to: "present",
    },
    {
      id: uuidv4(),
      position: "Software Developer",
      company: "blueHike Inc.",
      city: "Nairobi City",
      from: "2023",
      to: "present",
    },
    {
      id: uuidv4(),
      position: "Software Developer",
      company: "blueHike Inc.",
      city: "Nairobi City",
      from: "2023",
      to: "present",
    },
    {
      id: uuidv4(),
      position: "Software Developer",
      company: "blueHike Inc.",
      city: "Nairobi City",
      from: "2023",
      to: "present",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "Laikipia University",
      city: "Nyahururu",
      degree: "UnderGraduate",
      subject: "Bachelor of Science",
      from: "2019",
      to: "2023",
    },
  ],
};

export default exampleCV;
