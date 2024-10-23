import React, { memo } from "react";

const Button = ({ children, actions }) => {
  const handeClick = () => {
    alert(actions);
  };

  return (
    <button onClick={() => handeClick()} className="mx-auto">
      {children}
    </button>
  );
};

export default memo(Button);
