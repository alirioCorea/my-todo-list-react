import React from 'react';
import ReactDOM from "react-dom";
import './Modal.css';

export default function index({children}) {
  return ReactDOM.createPortal(
    <div className="modal-background">
      {children}
    </div>,
    document.getElementById('modal')
  )
}
