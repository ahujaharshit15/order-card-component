import React from "react";

import "./FinalItem.css";

const FinalItem = (props) => {
  return (
    <React.Fragment>
      <div class="items-list-div">
        <div class="avatar-div">
          <img alt="avatar" src={props.imgAvatar}></img>
        </div>

        <div class="content-box">
          <div class="content-title">
            <p>{props.itemName}</p>
          </div>

          <div class="content-info">
            <p>${props.price}/year</p>
          </div>
        </div>

        <div class="button-box">
          <div class="button-text">
            <p>
              <a>Change</a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FinalItem;
