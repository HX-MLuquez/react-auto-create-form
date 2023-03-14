import React, { useState } from "react";

export default function Part(props) {
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
      <form>
        {type !== "submit" ? (
          <div>
            {props.required ? (
              <div>
                <input
                  type={props.type}
                  name={props.name}
                  placeholder={props.label}
                  value={input}
                ></input>
                <label>{props.label}</label>
                {type === "select" ? (
                  <div>
                    <select></select>
                  </div>
                ) : null}
                {type === "checkbox" ? (
                  <div>
                    <checkbox></checkbox>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : (
          <button></button>
        )}
      </form>
    </>
  );
}
