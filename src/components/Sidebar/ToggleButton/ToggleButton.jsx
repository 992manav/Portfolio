import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      className="hamburger-button"
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default ToggleButton;