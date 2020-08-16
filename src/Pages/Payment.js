import React, { Component } from "react";
import {
  Button,
  Jumbotron,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import "../Styles/Payment.css";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fees: 4500,
      activeTab: "1",
      reg_no: "TCR19XXYY",
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
      var tab_active = document.getElementById(
        tab === "2" ? "pending" : "recent"
      );
      tab_active.style.color = "black";
      tab_active.style.boxShadow = "rgb(15, 211, 195) 2px 3px 7px";
      tab_active.style.borderBottom = " none";
      tab = document.getElementById(tab === "2" ? "recent" : "pending");
      tab.style.color = "rgb(177, 180, 180)";
      tab.style.boxShadow = "none";
      tab.style.borderBottom = "2px solid rgb(177, 180, 180)";
    }
  }

  render() {
    return (
      <div className="payment">
        <Jumbotron>
          <div className="container">
            <div className="row">
              <div className="col headers d-flex">
                <span className="fa fa-user fa-2x profile-emb"></span>
                <h3> &nbsp;Firstname Lastname &nbsp;({this.state.reg_no})</h3>
              </div>
            </div>
          </div>
        </Jumbotron>
        <div className="container">
          <div className="row " style={{ marginTop: "5vh" }}>
            <div className="col-md-7 headers">
              <h2>
                Amount <span className="fa fa-caret-right f-2x"></span> Rs.
                {this.state.fees}/-
              </h2>
            </div>
            <div className="col-10 offset-1 col-md-4 offset-md-1">
              <Button className="pay btn-block btn-lg mt-2">Pay</Button>
            </div>
          </div>
          <hr />
          <div className="row history">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={{ active: this.state.activeTab === "1" }}
                  id="recent"
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Recent payments
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={{ active: this.state.activeTab === "2" }}
                  id="pending"
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Pending payments
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row style={{ marginTop: "7vh" }}>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">Hey</Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;