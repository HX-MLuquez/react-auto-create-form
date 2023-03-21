import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ToList.css";

const ToList = () => {
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="fixed_cartel">
        
        <Link to="/list" className="fixed_cartel_button">
          Ir a la lista
        </Link>
        <button className="fixed_cartel_button" onClick={handleClose}>
          Cerrar
        </button>
      </div>
    </>
  );
};

export default ToList;
