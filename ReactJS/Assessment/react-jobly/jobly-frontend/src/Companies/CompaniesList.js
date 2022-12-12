import React, { useEffect, useState } from "react";
import JoblyApi from "../API/Api";

const CompaniesList = () => {
  const [companies, setCompanies] = useState(null);

  //   useEffect(function PreLoadInfo() {
  //     async function getCompanies() {
  //       const temp = await JoblyApi.getCompanies();
  //       //   setCompanies(await JoblyApi.getCompanies());
  //       console.log(temp);
  //     }
  //     getCompanies();
  //   }, []);

  return (
    <>
      <div>Something Here!!!</div>
    </>
  );
};

export default CompaniesList;
