import React from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Sidebar.css";
import gectemblem from "../Assets/Images/gectemblem.jpg";

function Sidebar(props) {
  let sideboard_class = "sideboard";
  if (props.width < 768 && props.collapse) {
    sideboard_class = "sideboard sideboard-collapsed";
  } else if (props.width < 768) {
    sideboard_class = "sideboard sideboard-float";
  }

  let path = useLocation().pathname;
  let [option_class1, option_class2, option_class3] = [
    "option",
    "option",
    "option",
  ];
  if (path === "/dashboard/profile") {
    option_class1 += " active-menu";
  }
  if (path === "/dashboard/payment") {
    option_class2 += " active-menu";
  }
  if (path === "/dashboard/notifications") {
    option_class3 += " active-menu";
  }

  return (
    <React.Fragment>
      <div className="toggler ">
        <img src={gectemblem} className="emblem" alt="navbar" />
      </div>
      <div className={sideboard_class}>
        <div className="container">
          <div className="head" onClick={() => props.collapseToggle()}>
            <div>
              <img src={gectemblem} className="emblem" alt="emblem" />
            </div>
            <div className="text ">&nbsp;GECT&nbsp;PAY</div>
          </div>
          <hr />
          <div className="options">
            <div
              className={option_class1}
              onClick={() => props.routeToggle("profile")}
            >
              <div className="col">
                <span className="fa fa-user fa-2x "></span>
                <span className="text">&nbsp;USER PROFILE</span>
              </div>
            </div>
            <div
              className={option_class2}
              onClick={() => props.routeToggle("payment")}
            >
              <div className="col">
                <span className="fa fa-credit-card-alt fa-2x"></span>
                <span className="text">&nbsp;PAY MY FEE</span>
              </div>
            </div>
            <div
              className={option_class3}
              onClick={() => props.routeToggle("notifications")}
            >
              <div className="col">
                <span className="fa fa-bell-o fa-2x"></span>
                <span className="text">&nbsp;NOTIFICATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
