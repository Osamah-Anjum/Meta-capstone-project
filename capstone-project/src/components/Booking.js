import React from 'react';

import Booking from './BookingForm';

const Booking = (props) => {

  return (

    <BookingForm available Times={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm} />

  );

};

export default Booking;