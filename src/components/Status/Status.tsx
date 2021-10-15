import React from "react";
import "./Status.scss";

const Status: React.FC<{ icon: string; name: string }> = ({
  icon,
  name,
}) => {
  return (
    <div className="card__loading">
      <i className={icon}></i>
      <span>{name}</span>
    </div>
  );
};

export default Status;
