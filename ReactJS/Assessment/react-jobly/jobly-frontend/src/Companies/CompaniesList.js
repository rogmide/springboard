import React, { useEffect, useState } from "react";
import JoblyApi from "../API/Api";
import CompanyCard from "./CompanyCard";

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(function PreLoadInfo() {
    async function getCompanies() {
      const comp = await JoblyApi.getCompanies();
      setCompanies(comp);
    }
    getCompanies();
  }, []);

  return (
    <>
      {companies.map((c) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <CompanyCard company={c} />
        </div>
      ))}
    </>
  );
};

export default CompaniesList;
