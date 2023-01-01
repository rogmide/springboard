import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../API/Api";
import JobCard from "../Jobs/JobCard";
import "./CompanyDetail.css";

const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(
    function PreLoadInfo() {
      async function getCompany() {
        const comp = await JoblyApi.getCompany(handle);
        setCompany(comp);
      }
      getCompany();
    },
    [handle]
  );

  // useEffect run sometimes 2 times without this line of code this component break
  // adding this little line fix the problem
  if (!company) return;

  return (
    <div className="container card CompanyDetail">
      <div
        className="card-header"
        style={{
          backgroundColor: "rgba(52, 58, 64, 0.2)",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        {company.name}
      </div>
      <div className="card-body">
        <p className="card-text">{company.description}</p>
        {company.logoUrl ? (
          <img className="float-right" src={company.logoUrl} />
        ) : (
          ""
        )}
      </div>
      {company.jobs.map((j) => (
        <JobCard key={j.id} job={j} />
      ))}
    </div>
  );
};

export default CompanyDetail;
