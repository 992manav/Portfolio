import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      style={{
        border: "none",
        background: "none",
        cursor: "pointer",
        fontSize: "24px",
      }}
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default ToggleButton;
