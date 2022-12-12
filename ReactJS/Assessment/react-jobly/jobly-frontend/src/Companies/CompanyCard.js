import React from "react";
import "./CompanyCard.css";

const CompanyCard = ({ company }) => {
  return (
    <div className="card CompanyCard">
      <div className="card-header">{company.name}</div>
      <div className="card-body">
        <p className="card-text">{company.description}</p>
        {company.logoUrl ? (
          <img className="float-right" src={company.logoUrl} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CompanyCard;
