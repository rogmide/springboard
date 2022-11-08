import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = () => {
  const getNewData = async (currentUrl, clearData = false) => {
    try {
      const res = await axios.get(currentUrl);
      if (clearData === true) {
        return [];
      }
      return (oldData) => [...oldData, { ...res.data, id: uuid() }];
    } catch (err) {
      return err;
    }
  };

  return { getNewData };
};

export default useAxios;
