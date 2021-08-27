import React from "react";
import "./Company.css";
import img from "../../images/img.PNG";
import eLearning from "../../images/eLearning.svg";
import linkedin from "../../images/linkedin.svg";
import employee from "../../images/employee.svg";

const Company = ({ company }) => {
  return (
    <div className="company">
      <div className="company-box">
        <div className="left-side">
          <img className="company-logo" src={img} alt="img" />
          <div>
            <strong>
              <div>{company[0].Name}</div>
            </strong>
            <span>
              {company[0].Website}
              <img src={eLearning} alt="eLearning" />
            </span>

            <span>{company[0].Location}</span>
            <img src={linkedin} alt="eLearning" />
          </div>
        </div>
        <div className="center-side">
          <img src={employee} alt="eLearning" />
          <div>
            <span>1452</span>
            <br />
            <span>Employee</span>
          </div>

          <img src={eLearning} alt="eLearning" />
          <div>
            <span>E-learning</span>
            <br />
            <span>Industry</span>
          </div>
        </div>
        <div className="right-side">
          <span>Employee</span>
          <span>Industry</span>
        </div>
      </div>
    </div>
  );
};

export default Company;
