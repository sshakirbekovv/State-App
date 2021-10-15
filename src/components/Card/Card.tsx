import React from "react";
import { checkFileExtension } from "../../utils/checkex";
import "./Card.scss";

const Card: React.FC<{
  status?: any;
  name: string;
  size: number | null;
  close?: boolean;
  onClose?: ()=> void;
}> = ({ name, size, status, close, onClose }) => {
  return (
    <div className="card">
      {close ? (
        <div className="card__close" onClick={onClose}>
          <i className="fal fa-times"></i>
        </div>
      ) : null}
      <div className="card__file">
        <div className="file__icon">
          {checkFileExtension(name.split(".").pop())}
        </div>
        <div className="file__name">
          <span className="fname">{name}</span>
          <span className="fsize">{size}MB</span>
        </div>
      </div>
      {status}
    </div>
  );
};

export default Card;
