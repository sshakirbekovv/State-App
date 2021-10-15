import React, { ReactNode } from "react";
import "./Container.scss";


const Container: React.FC<{ children: ReactNode; }> = ({ children }) => {

  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;