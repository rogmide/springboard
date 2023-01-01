import React, { useEffect, useState } from "react";
import JoblyApi from "../API/Api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../CommunComponent/SearchForm";

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(function PreLoadInfo() {
    async function getCompanies() {
      Search();
    }
    getCompanies();
  }, []);

  async function Search(name) {
    const comp = await JoblyApi.getCompanies(name);
    setCompanies(comp);
  }

  return (
    <>
      <div>
        <SearchForm search={Search} />
      </div>
      {companies.map((c) => (
        <div
          key={c.handle}
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
