import React from "react";

import "./CardComponent.css";
import FinalItem from "./FinalItem";

const CardComponent = () => {
  return (
    <React.Fragment>
      <div class="outer-box">
        <div class="image-box">
          <img
            alt="scene"
            src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          ></img>
        </div>

        <div class="main-content">
          <div class="content">
            <h1>Order Summary</h1>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like.
            </p>
          </div>
          <FinalItem />
        </div>
        <div class="button-container">
          <form>
            <button class="jumbo-button" type="submit">
             Proceed to Payment
            </button>

            <button class="jumbo-button cancel-button" type="submit">
              Cancel Order
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardComponent;
