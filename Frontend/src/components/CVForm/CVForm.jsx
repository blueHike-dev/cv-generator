import React, { useState } from "react";

const CVForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };
  return (
    <div>
      <h2>Create Your CV</h2>
      <form action="" onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            placeholder="FullName"
            name="FullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Create CV</button>
      </form>
    </div>
  );
};

export default CVForm;
