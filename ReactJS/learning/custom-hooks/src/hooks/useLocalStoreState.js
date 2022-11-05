import React, { useState, useEffect } from "react";

const useLocalStoreState = (key, defaulValue) => {
  const [state, setState] = useState(() => {
    try {
      let value = JSON.parse(window.localStorage.getItem(key) || defaulValue);
      return value;
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStoreState;
