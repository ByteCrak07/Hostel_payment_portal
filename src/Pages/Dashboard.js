import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../Styles/Dashboard.css";

//importing components
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Payment from "./Payment";
import Notifications from "./Notifications";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      collapse: true,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.collapseToggle = this.collapseToggle.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width >= 992 || this.state.width < 768) {
      this.setState({ collapse: true });
    }
  }

  collapseToggle(collapse) {
    if (collapse) {
      this.setState({ collapse: collapse });
    } else {
      if (this.state.collapse && this.state.width < 992) {
        this.setState({ collapse: false });
      } else {
        this.setState({ collapse: true });
      }
    }
  }

  changePage(route) {
    this.props.history.push(route);
    if (this.state.width <= 768) {
      this.collapseToggle();
    }
  }

  render() {
    return (
      <div>
        <Sidebar
          width={this.state.width}
          collapse={this.state.collapse}
          collapseToggle={this.collapseToggle}
          changePage={this.changePage}
        />
        <div
          className="dash"
          onClick={() => (this.state.collapse ? "" : this.collapseToggle(true))}
        >
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              classNames="page"
              timeout={300}
            >
              <Switch>
                <Route
                  path={`${this.props.match.path}/profile`}
                  exact
                  component={Profile}
                />
                <Route
                  path={`${this.props.match.path}/payment`}
                  exact
                  component={Payment}
                />
                <Route
                  path={`${this.props.match.path}/notifications`}
                  exact
                  component={Notifications}
                />
                <Redirect to={`${this.props.match.path}/profile`} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default Dashboard;
