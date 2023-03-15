import React, { useState, useEffect } from "react";
import "./Form.css";
import Part from "./Part";

const Form = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../../utils/db.json");
      console.log(response);
      const jsonData = await response.json();
      console.log(jsonData.items);
      setData(jsonData.items);
    };
    fetchData();
  }, []);

  var type = "input";
  let id = 1;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Perform additional form submission logic here
  };
  
  const handleChangeInput = function(){

  }
  return (
    <div>
      <form className="form-component" onSubmit={handleSubmit}>
        {type !== "submit" ? (
          <div className="form-body">
            <div className="form-group">
              <div className="form-header">
                <h2>Title</h2>
              </div>
            </div>
            {data?.map((e) => (
              <Part key={id++ + e.name} props={e} handleChangeInput={handleChangeInput}></Part>
            ))}
          </div>
        ) : (
          <div className="form-footer">
            <button type="submit" >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
