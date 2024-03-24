import React from "react";
import "./Notifications.css"
import close from "./close-icon.png"
import { getLatestNotification} from "./utils";
const Notification = () => {
    return ( 
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li> 
                <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        <button style={{ 
		  position: 'relative',
          float: "right",
          top: "-130px",
          left: "10px",
          maringin: "0",
		  background: 'transparent',
		 }} 
		 aria-label='close' 
		 onClick={() => {
		  console.log('Close button has been clicked');
	  }}>
	    <img src={close} alt="close" height="15px" width="15px"></img>
	  </button>
        </div>
     );
}
 
export default Notification;