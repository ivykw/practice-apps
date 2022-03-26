import React from 'react';

function Welcome(props) {
  return (
    <div>
      <h3>
        Ready to check out? Please click the button below...
      </h3>
      <button onClick={props.handleBegin}>Begin Checkout</button>
    </div>
  )
};

export default Welcome;