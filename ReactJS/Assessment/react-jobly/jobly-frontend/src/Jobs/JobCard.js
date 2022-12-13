import React from "react";
import "./JobCard.css";

const JobCard = ({ job }) => {
  return (
    <>
      <div className="JobCard">
        <div>{job.title}</div>
        <div className="card-body">
          <div>
            <p className="card-text"> Salary: {job.salary}</p>
            <p className="card-text"> Equity: {job.equity}</p>
          </div>
          <button className="btn btn-secondary">Apply</button>
        </div>
      </div>
    </>
  );
};

export default JobCard;
