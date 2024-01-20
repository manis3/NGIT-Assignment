import React from "react";
import "./styles/Modal.css";
const Modal = ({ children }) => {
  return (
    <div className="card-container">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Modal;
