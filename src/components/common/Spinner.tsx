import React, { FC } from "react";

interface SpinnerProps {
  size?: "lg" | "md" | "sm";
}

const Spinner: FC<SpinnerProps> = ({ size = "md" }) => {
  return (
    <div className={`sk-chase ${size}`}>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  );
};

export default Spinner;
