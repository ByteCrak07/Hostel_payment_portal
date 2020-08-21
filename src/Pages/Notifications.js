import React, { Component } from "react";
import "../Styles/Notifications.css";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifs: [
        {
          id: "0",
          msg:
            "¡Oye! Hay un montón de notificaciones para que usted pueda leer ",
        },
        {
          id: "1",
          msg:
            "¡Oye! Hay un montón de notificaciones para que usted pueda leer",
        },
        {
          id: "2",
          msg:
            "¡Oye! Hay un montón de notificaciones para que usted pueda leer",
        },
        {
          id: "3",
          msg:
            "¡Oye! Hay un montón de notificaciones para que usted pueda leer",
        },
        {
          id: "4",
          msg:
            "¡Oye! Hay un montón de notificaciones para que usted pueda leer",
        },
        {
          id: "5 ",
          msg:
            "¡Oye! Hay un montón de notificaciones para que usted pueda leer",
        },
      ],
      list: "<div></div>",
    };
  }

  componentDidMount() {
    //fetch notifications into notifs.
    var notif_list;
    if (this.state.notifs.length !== 0) {
      notif_list = this.state.notifs.map((notif) => {
        return (
          <React.Fragment>
            <div className="row msg">
              <div className="col-7 message"> {notif.msg}</div>
              <div className="col-2 col-sm-2 offset-1 offset-sm-2  ">
                {" "}
                <small>--some date</small>
              </div>
            </div>
            <hr />
          </React.Fragment>
        );
      });
    } else {
      notif_list = <div>All clear..!</div>;
    }

    this.setState({ list: notif_list });
  }

  render() {
    return (
      <div className="notification">
        <div className="notif container-fluid">{this.state.list}</div>
      </div>
    );
  }

  //async componentDidUpdate(prevprops, prevstate) {
  //CONDITIONAL API CALLS OR WHATEVER.
  // if (this.state.notifs.length != 0) {
  //     var notif_list = this.state.notifs.map((notif) => {
  //         return (
  //             <li><p>{notif.message}</p>
  //                 <p><small>--{notif.date}</small></p>
  //             </li>
  //         )

  //     })
  // } else {
  //     return <div>All clear..!</div>
  //}
}

export default Notifications;
