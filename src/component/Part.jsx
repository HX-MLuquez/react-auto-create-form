import React, { useState } from "react";
import "./Part.css";

export default function Part({props}) {
  console.log("---props--> ", props);
  const [input, setInput] = useState();
  /*
    {
			"type": "text",
			"label": "Nombre completo",
			"name": "full_name",
			"required": true
		},
    */
  return (
    <>
      <div>
        <div className="form-group">
          <label htmlFor={props.name}>{props.name}
          { props.type === "select" ?
            <select value={props.value} >
            <option value="">-- Please select an option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select> : null
          }
          </label>
          <input
            type={props.type}
            id={props.name}
            name={props.name}
            value={input}
            onChange={(e) => setName(e.target.value)}
            required={props.required}
          />
        </div>
      </div>
    </>
  );
}
