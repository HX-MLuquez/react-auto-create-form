import React, { useState } from "react";
import "./Form.css";
import Parts from "./Parts";

const Form = () => {
  // Define initial state for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Perform additional form submission logic here
  };

  return (
    <form className="form-component" onSubmit={handleSubmit}>
      <Parts></Parts>
    </form>
  );
};

export default Form;
