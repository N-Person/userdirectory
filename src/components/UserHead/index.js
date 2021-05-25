import React from "react";
import "./style.css";

function UserHead(props) {
  return (
    <div className="row d-flex p-2 bd-highlight">
      <div className="col-sm-2">
        <h4>PROFILE PIC</h4>
      </div>
      <div className="col-sm-2">
        <h4 onClick={props.sortByName}>
           NAME
           <br></br>
           (click to sort)
        </h4>
      </div>
      <div className="col-sm-2">
        <h4>EMAIL</h4>
      </div>
      <div className="col-sm-2">
        <h4>AGE</h4>
      </div>
      <div className="col-sm-2">
        <h4>PHONE</h4>
      </div>
    </div>
  );
}

export default UserHead;