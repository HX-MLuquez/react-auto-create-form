import React, { useState } from "react";
import "./Part.css";

export default function Part({ input_field, handleChangeInput }) {
  // console.log("---input_field--> ", input_field); // "input_field" si el objeto es una entrada de datos genérica
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
        <div className="form_group">
          {input_field.type !== "submit" ? (
            <div>
              <label htmlFor={input_field.name}>
                {input_field.name}
                {input_field.type === "select" ? (
                  <select
                    value={input}
                    name={input_field.name}
                    onChange={handleChangeInput}
                  >
                    <option value="">-- Please select an option --</option>
                    {input_field.options.map((e) => (
                      <option key={e.value} value={e.value}>
                        {e.label}
                      </option>
                    ))}
                  </select>
                ) : null}
              </label>
              {input_field.type !== "select" ? (
                <input
                  type={input_field.type}
                  id={input_field.name}
                  name={input_field.name}
                  value={input}
                  onChange={handleChangeInput}
                  required={input_field.required}
                />
              ) : null}
            </div>
          ) : (
            <div className="form_footer">
              <button type="submit">{input_field.label}</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
