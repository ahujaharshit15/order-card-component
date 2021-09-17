import React from "react";

import "./CardComponent.css";
import FinalItem from "./FinalItem";

const CardComponent = (props) => {
  return (
    <React.Fragment>
      <div class="outer-box">
        <div class="image-box">
          <img alt="scene" src={props.imgSource}></img>
        </div>

        <div class="main-content">
          <div class="content">
            <h1>Order Summary</h1>
            <p>{props.summary}</p>
          </div>

          {/* Props to be used to pass in data about the product details and final additions to the cart. */}
          <FinalItem
            imgAvatar="https://images.assetsdelivery.com/compings_v2/alekseyvanin/alekseyvanin1905/alekseyvanin190501464.jpg"
            itemName="Annual Plan"
            price="59.99"
          />
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
