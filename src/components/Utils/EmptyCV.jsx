import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "../../assets/empty_avatar.png";

const emptyCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: emptyAvatar,
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
    skills: "",
    hobbiesInterests: "",
    referee: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ],
};

export default emptyCV;
