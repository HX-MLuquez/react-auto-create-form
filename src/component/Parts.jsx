import React, { useState, useEffect } from "react";
import "./Parts.css";
import Part from "./Part";

export default function Parts() {
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
  let id = 1
  return (
    <div>
      {type !== "submit" ? (
        <div className="form-body">
          <div className="form-group">
            <div className="form-header">
              <h2>Title</h2>
            </div>
          </div>
          {data?.map((e) => (
            <Part key={id++ + e.name} props={e}></Part>
          ))}
        </div>
      ) : (
        <div className="form-footer">
          <button type="submit">Submit</button>
        </div>
      )}
    </div>
  );
}
