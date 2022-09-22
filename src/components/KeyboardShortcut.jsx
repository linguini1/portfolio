import React from "react";
import "./KeyboardShortcut.css";

// Utils
import { capitalize } from "../utils/strformat";
import { useState, useEffect } from "react";

// Hooks

export default function KeyboardShortcut({ key_val, modifier, functionality }) {
  // States for classes on keypress
  const [keyDown, setKeyDown] = useState(false);
  const [modifierDown, setModifierDown] = useState(false);

  const modifier_pressed = (event) => {
    return (
      (event.shiftKey && modifier == "shift") ||
      (event.altKey && modifier == "alt") ||
      (event.ctrlKey && modifier == "ctrl")
    );
  };

  function key_down_handler(event) {
    // Check for keypress
    if (event.code == key_val) {
      setKeyDown(true);
    }

    // Check for modifier press
    if (modifier_pressed(event)) {
      setModifierDown(true);
    }
  }

  function key_up_handler(event) {
    // Check for keypress
    if (event.code == key_val) {
      setKeyDown(false);
    }

    // Check for modifier press
    if (event.code == "ShiftLeft" || "ShiftRight") {
      setModifierDown(false);
    }
  }

  useEffect(() => {
    // Add event listeners for both key up and down
    document.addEventListener("keydown", key_down_handler);
    document.addEventListener("keyup", key_up_handler);

    // Remove event listeners
    return () => {
      document.removeEventListener("keydown", key_down_handler);
      document.removeEventListener("keyup", key_up_handler);
    };
  }, []);

  return (
    <div className="keyboard-shortcut">
      <div className="keystroke">
        <div className={"key-button " + (modifierDown ? "pressed" : "")}>
          {capitalize(modifier)}
        </div>
        <p>+</p>
        <div className={"key-button " + (keyDown ? "pressed" : "")}>
          {key_val.slice(3)}
        </div>
      </div>
      <p>{functionality}</p>
    </div>
  );
}
