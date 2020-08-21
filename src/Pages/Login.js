import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Modal,
  ModalBody,
} from "reactstrap";
import "../Styles/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      agree: false,
      touched: {
        username: false,
        password: false,
      },
      isModalOpen: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleRetrieve = this.handleRetrieve.bind(this);
  }
  handleInputChange(e) {
    var name = e.target.name;
    var value = name === "agree" ? !this.state.agree : e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.touched.username && this.state.password) {
      window.location = "/dashboard/profile";
    } else {
      alert("Please input valid credentials");
    }
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  handleRetrieve = (e) => {
    alert("Ippo thalkalam onnumaytila");
    e.preventDefault();
  };

  validate(username, password) {
    const errors = {
      username: "",
      password: "",
    };
    if (this.state.touched.username && username.length < 1)
      errors.username = "This field is required to be filled";
    if (this.state.touched.password && password.length < 1)
      errors.password = "This field is required to be filled";

    return errors;
  }
  render() {
    const errors = this.validate(this.state.username, this.state.password);
    return (
      <React.Fragment>
        <div className="login">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 form-container">
                <h2>LOGIN</h2>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      value={this.state.username}
                      valid={errors.username === ""}
                      invalid={errors.username !== ""}
                      onBlur={this.handleBlur("username")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.username}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.password}
                      valid={errors.password === ""}
                      invalid={errors.password !== ""}
                      placeholder="Password"
                      onBlur={this.handleBlur("password")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.password}</FormFeedback>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      onChange={this.handleInputChange}
                    />
                    <Label htmlFor="agree">Remember me</Label>
                  </FormGroup>

                  <Button
                    type="submit"
                    className="btn btn-block"
                    color="success"
                  >
                    Sign in
                  </Button>
                </Form>
                <div className="forgot" onClick={this.toggleModal}>
                  <h9>Forgot your password?</h9>
                </div>
              </div>
              <div className="col-8 ">
                <img src="/Assets/caro1.jpg" className=" image1" alt="hostel" />
                <img src="/Assets/caro3.jpg" className=" image2" alt="hostel" />
                <img
                  src="/Assets/carou5.jpg"
                  className=" image3"
                  alt="hostel"
                />
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalBody>
            {" "}
            <Form onSubmit={this.handleRetrieve}>
              <FormGroup>
                <Label htmlFor="username">Enter your Email/Phone no.</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <small>
                An OTP will be sent to the entered email address for resetting
                the password
              </small>
              <hr />
              <Button type="submit" value="submit" color="primary">
                Recieve OTP
              </Button>{" "}
              <Button color="danger" onClick={this.toggleModal}>
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Login;
