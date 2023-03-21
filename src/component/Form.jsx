import React, { useState, useEffect } from "react";
import "./Form.css";
import Part from "./Part";
import { v4 as uuidv4 } from "uuid";
import ToList from "./ToList";

import axios from "axios";

const Form = () => {
  const [data, setData] = useState();
  const [list, setList] = useState(false);

  useEffect(() => {
    async function getDb() {
      const getDb = await axios.get(
        "https://form-build-6ec5d-default-rtdb.firebaseio.com/users.json"
      );
      const result = Object.values(getDb.data);
      // console.log("::::::", result);
    }
    getDb();
    const fetchData = async () => {
      const response = await fetch("../../utils/db.json");
      // console.log(response);
      const jsonData = await response.json();
      // console.log(jsonData.items);
      setData(jsonData.items);
    };
    fetchData();
  }, []);

  let keyId = 1;

  const id = useState(uuidv4());
  const [input, setInput] = useState({
    id: "",
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
    terms_and_conditions: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("--input---> ", input);
    async function postForm() {
      const result = await axios.post(
        "https://form-build-6ec5d-default-rtdb.firebaseio.com/users.json",
        JSON.stringify(input)
      );
    }
    postForm();

    setList(true);
  };

  const handleChangeInput = function (event) {
    if (event.target.type === "checkbox") {
      // console.log(event.target.checked);
      setInput({ ...input, [event.target.name]: event.target.checked });
    } else {
      // console.log(event.target.name);
      setInput({
        ...input,
        [event.target.name]: event.target.value,
        id: id[0],
      });
    }
    // event.target.type === "checkbox"
    //   ? setInput({ ...input, [event.target.name]: event.target.checked })
    //   : setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <form className="form_component" onSubmit={handleSubmit}>
        <div className="form_body">
          <div className="form_group">
            <div className="form_header">
              <h2>Title</h2>
            </div>
          </div>
          {data?.map((element) => (
            <Part
              key={keyId++ + element.name}
              input_field={element}
              handleChangeInput={handleChangeInput}
            ></Part>
          ))}
        </div>
      </form>
      {list ? <ToList /> : null}
    </div>
  );
};

export default Form;
