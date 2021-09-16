import React from "react";

import "./CardComponent.css";

const CardComponent = () => {
  return (
    <React.Fragment>
      <div class="outer-box">
        <div >
            <img class="image-box" alt="Unicorn" src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardComponent;
