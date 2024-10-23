import React, { memo } from "react";
import { useLocation } from "react-router-dom";

const Button = ({ onClick }) => {
  const { pathname } = useLocation();

  console.log(pathname)
  return (
    <button className="mx-auto" onClick={() => onClick?.(pathname)}>
      Button
    </button>
  );
};

export default memo(Button);
