import { useEffect, useRef, useState } from "react";

const modifier_pressed = (modifier, event) => {
  if (modifier == "ctrl") {
    return event.ctrlKey;
  } else if (modifier == "shift") {
    return event.shiftKey;
  } else if (modifier == "alt") {
    return event.altKey;
  } else {
    return true; // In case no modifier is required
  }
};

export function useKey(key, modifier, callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // Record if the keycombo was pressed or not
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const handle = (event) => {
      if (event.code === key && modifier_pressed(modifier, event)) {
        setKeyPressed(true);
        callbackRef.current();
      }
    };

    // Add event listener for hotkey
    document.addEventListener("keypress", handle);

    // Cleanup function to remove event listener
    return () => document.removeEventListener("keypress", handle);
  }, [key]);

  return keyPressed;
}
