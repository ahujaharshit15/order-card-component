import React from "react";

import "./FinalItem.css";

const FinalItem = () => {
  return (
    <React.Fragment>
      <div class="items-list-div">
        <div class="avatar-div">
          <img
            alt="melody-avatar"
            src="https://images.assetsdelivery.com/compings_v2/alekseyvanin/alekseyvanin1905/alekseyvanin190501464.jpg"
          ></img>
        </div>

        <div class="content-box">
          <div class="content-title">
            <p>Annual Plan</p>
          </div>

          <div class="content-info">
            <p>$59.99/year</p>
          </div>
        </div>

        <div class="button-box">
        <div class="button-text">
        <p><a>Change</a></p>
        </div>
           
        </div>

      </div>
    </React.Fragment>
  );
};

export default FinalItem;
