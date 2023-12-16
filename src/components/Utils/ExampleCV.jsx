import { v4 as uuidv4 } from "uuid";
import examplePhoto from "../../assets/simo.jpg";

const ExampleCV = {
  personalInfo: {
    firstName: "Simon",
    lastName: "Muiruri",
    title: "Software Developer",
    photo: examplePhoto,
    address: "10203",
    PhoneNumber: "0798296778",
    email: "wambuisimon712@gmail.com",
    description:
      "To join an interactive and challenging organization that offers me a constructive workplace for adding value to people and the organization To join a reputable organization that offers me a constructive workplace for excelling and developing my potential in entrepreneurship ",
    skills: "Hiking",
    hobbiesInterests: "eating",
    referee: "simo Blues",
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
      position: "Online Marketer",
      company: "Copia Kenya",
      city: "Nyahururu",
      from: "2021",
      to: "2022",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "Laikipia University",
      city: "Nyahururu",
      degree: "UnderGraduate",
      subject: "BSc Economics and Statistics",
      from: "2019",
      to: "2023",
    },
    {
      id: uuidv4(),
      universityName: "Kiaguthu Boys School",
      city: "Murang'a",
      degree: "High School",
      subject: "Kenya Certificate of Secondary Education",
      from: "2015",
      to: "2018",
    },
    {
      id: uuidv4(),
      universityName: " New Kihumbuini School",
      city: "Nairobi",
      degree: "Primary School",
      subject: "Kenya Certificate of Primary Education",
      from: "2015",
      to: "2018",
    },
  ],
};

export default ExampleCV;
