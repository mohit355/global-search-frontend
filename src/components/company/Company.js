import React from "react";
import "./Company.css";
import { connect } from "react-redux";
import moment from "moment";

const Company = (props) => {
  return (
    <>
      <div className="container">
        <div className="containerTop">
          <div className="container1">
            <div className="container2">
              <div className="firstBox">
                <img
                  src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
                  alt="logo"
                  className="logo"
                />
              </div>
              <div className="secondBox">
                <h3>
                  <a href="##">
                    {props.company[0].Name}
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </h3>
                <a href="##">
                  {props.company[0].Website} <i className="fas fa-globe"></i>
                </a>
                <p>{props.company[0].Location}</p>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
            <div className="thirdBox">
              <div className="box">
                <div className="icons">
                  <i className="fa fa-user-friends"></i>
                </div>
                <div className="text">
                  <h4>{Math.ceil(Math.random() * 1000)}</h4>
                  <p>Employees</p>
                </div>
              </div>

              <div className="box">
                <div className="icons">
                  <i className="fa fa-globe"></i>
                </div>
                <div className="text">
                  <h4>E-Learning</h4>
                  <p>Industry</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fourthBox">
            <p className="para1 blue">
              last activity : {moment(props.company[0].updatedAt).fromNow()}
            </p>
            <p className="para1 darkblue">owner:{props.company[0].Owner}</p>
            <p className="para1 orange">
              Opportunities:{Math.floor(Math.random() * 10)}
            </p>
            <p className="para1 grey">Is Customer</p>
            <p className="para1 orange">Not in salesLoft</p>
          </div>
        </div>
        <div className="containerBottom">
          {props.company[0].Description.split(" ").map((data, index) => (
            <p key={index} className="para">
              {data}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    company: state.search.company,
    searchQuery: state.search.search,
  };
};

export default connect(mapStateToProps, null)(Company);
