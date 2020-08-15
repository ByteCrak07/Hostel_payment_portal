import React, { Component } from "react";
import { Switch , Route, Redirect } from "react-router-dom";
import "../Styles/Dashboard.css";

//importing components
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Payment from "./Payment";
import Notfications from "./Notifications";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: 0,
            height: 0,
            collapse: true
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.collapseToggle = this.collapseToggle.bind(this);
        this.routeToggle = this.routeToggle.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if(this.state.width >= 768) {
            this.setState({collapse: true});
        }
    }

    collapseToggle(collapse) {
        if(collapse) {
            this.setState({collapse: collapse})
        } else {
            if(this.state.collapse && this.state.width < 768) {
                this.setState({collapse: false});
            }
            else {
                this.setState({collapse: true});
            }
        }
    }

    routeToggle(route) {
        this.props.history.push(route)
    }

    render() {
        let dash_class = "dash";
        if(this.state.width < 768) {
            dash_class = "dash dash-collapsed"
        }

        return (
            <div>
                <Sidebar 
                    width={this.state.width}
                    collapse={this.state.collapse}
                    collapseToggle={this.collapseToggle}
                    routeToggle={this.routeToggle}
                />
                <div className={dash_class} onClick={() => this.state.collapse ? "" : this.collapseToggle(true)}>
                    <Switch>
                        <Route path={`${this.props.match.path}/profile`} exact component={Profile} />
                        <Route path={`${this.props.match.path}/payment`} exact component={Payment} />
                        <Route path={`${this.props.match.path}/notifications`} exact component={Notfications} />
                        <Redirect to={`${this.props.match.path}/profile`} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Dashboard;