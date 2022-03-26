import React from 'react'

function Confirmation(props) {
  return (
    <div>
      <div>
        <b>Name:</b> {props.data.name}
      </div>
      <div>
        <b>Email:</b> {props.data.email}
      </div>
      <div>
        <b>Address Line 1:</b> {props.data.address1}
      </div>
      <div>
        <b>Address Line 2:</b> {props.data.address2}
      </div>
      <div>
        <b>City:</b> {props.data.city}
      </div>
      <div>
        <b>State:</b> {props.data.state}
      </div>
      <div>
        <b>Zip Code:</b> {props.data.zip}
      </div>
      <div>
        <b>Phone Number:</b> {props.data.phone}
      </div>
      <div>
        <b>Credit Card Number:</b> {props.data.card_num}
      </div>
      <div>
        <b>Card Expiration:</b> {props.data.expiry}
      </div>
      <div>
        <b>CVV:</b> {props.data.cvv}
      </div>
      <div>
        <b>Billing Zip Code:</b> {props.data.bill_zip}
      </div>
      <button onClick={props.handlePurchase}>Purchase</button>
    </div>
  )
}
export default Confirmation;