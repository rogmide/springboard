import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (url, oldData) => {
  const [error, setError] = useState(null);
  const [newData, setNewData] = useState(oldData);

  const getNewData = async () => {
    try {
      const res = await axios.get(url);
      setNewData((oldData) => [...oldData, { ...res.data, id: uuid() }]);
    } catch (err) {
      setError(err);
    }
  };

  return { error, getNewData, newData };
};

export default useAxios;
