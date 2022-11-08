import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (url) => {
  const getNewData = async (currentUrl = url) => {
    try {
      const res = await axios.get(currentUrl);
      return (oldData) => [...oldData, { ...res.data, id: uuid() }];
    } catch (err) {
      return err;
    }
  };

  return { getNewData };
};

export default useAxios;
