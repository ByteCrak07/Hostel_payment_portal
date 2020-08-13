import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../Styles/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state.username);
  }

  handleSubmit(e) {
    alert("hello");
    e.preventDefault();
  }
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row row-header ">
            <div className="col-4 offset-4 col-md-4 text-col">
              <h1>LOGIN</h1>
            </div>
          </div>
          <hr />
          <div className="row ">
            <div className="col-10 offset-1 col-md-4 offset-md-4 ">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row className="form-rows">
                  <Label htmlFor="username">Username :</Label>
                  <Input
                    type="text"
                    placeholder="Email/ Reg. no."
                    id="username"
                    name="username"
                    className="text"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup row className="form-rows">
                  <Label htmlFor="password">Password :</Label>
                  <Input
                    type="password"
                    placeholder="******************"
                    id="password"
                    className="text"
                    name="password"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <hr />
                <FormGroup>
                  <Button
                    type="submit"
                    value="submit"
                    className="btn-lg btn-block login-btn"
                    href="/profile"
                  >
                    Login
                  </Button>
                </FormGroup>
              </Form>
            </div>
            <div className="col-1 offset-9">
              <span
                className="fa fa-question-circle fa-3x"
                onClick={() => console.log("queries")}
              ></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
