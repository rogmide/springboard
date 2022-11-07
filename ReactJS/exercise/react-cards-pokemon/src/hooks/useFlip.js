import React, { useState } from "react";

const useFlip = (initialState = true) => {
  const [state, setState] = useState(initialState);

  const toggleUpDown = () => {
    setState((state) => !state);
  };

  return [state, toggleUpDown];
};

export default useFlip;
