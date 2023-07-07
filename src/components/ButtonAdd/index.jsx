import React from "react";
import "./ButtonAdd.css";

const ButtonAdd = ({ text, onClick, type, color }) => {
  const buttonStyle = {
    backgroundColor: color || "#3a79eb",
    // Otros estilos de botón
  };
  return (
    <button type={type} onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

export default ButtonAdd;
