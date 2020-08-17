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
    }
  }

  render() {
    return (
      <div className="payment">
        <div className="content ">
          <Jumbotron>
            <div className="container">
              <div className="row">
                <div className="col headers d-flex">
                  <span className="fa fa-user fa-2x"></span>
                  <h3> &nbsp;Firstname Lastname &nbsp;({this.state.reg_no})</h3>
                </div>
              </div>
            </div>
          </Jumbotron>
          <div className="container-fluid">
            <div className="row amount" style={{ marginTop: "5vh" }}>
              <div className="col-sm-7 col-md-7 headers">
                <h2>
                  Amount <span className="fa fa-caret-right f-2x"></span> Rs.{this.state.fees}/-
                </h2>
              </div>
              <div className="container col-4 col-md-4">
                <Button className="pay btn-block btn-lg mt-2">Pay</Button>
              </div>
            </div>
            <hr />
            <div className="row history">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === "1" ? "tabs tabs_active" : "tabs"}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Recent payments
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === "2" ? "tabs tabs_active" : "tabs"}
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
      </div>
    );
  }
}

export default Payment;