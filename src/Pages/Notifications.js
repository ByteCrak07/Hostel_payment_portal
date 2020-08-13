import React, {Component} from 'react';
import '../Styles/Notifications.css';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifs=[],
            list="<div></div>"
        }
    }

   async componentDidMount() {
        //fetch notifications into notifs.
        var notif_list
        if (this.state.notifs.length != 0) {
             notif_list = this.state.notifs.map((notif) => {
                return (
                    <li><p>{notif.message}</p>
                        <p><small>--{notif.date}</small></p>
                    </li>
                )
                 
            })
        } else {
             notif_list= (<div>All clear..!</div>)

            
        }
        
        this.setState({list:notif_list})
    
    
    }
    
    render()
    {
        return (
            <div classname="notifs">
                <div className="row notif-row">
                    <div className="col-10 offset-1">
                        {this.state.list}

                    </div>
                </div>

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

export default Notifications