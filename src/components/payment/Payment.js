import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Read booking data passed from CustomerDetails
  const bookingData = location.state;

  if (!bookingData) {
    return (
      <div className="container mt-5">
        <h3>No booking data found. Please complete booking first.</h3>
      </div>
    );
  }

  const { passengers, addons, tripDays, customerContact } = bookingData;

  // Price per passenger - dummy fixed price
  const pricePerPassenger = 4000;

  // Add-ons prices (fixed)
  const addonsPrices = {
    extraMeals: 500,
    guidedTour: 1500,
    airportPickup: 800,
  };

  // Calculate add-ons total per passenger
  const addonCostPerPassenger =
    (addons.extraMeals ? addonsPrices.extraMeals : 0) +
    (addons.guidedTour ? addonsPrices.guidedTour : 0) +
    (addons.airportPickup ? addonsPrices.airportPickup : 0);

  // Total cost per passenger including add-ons
  const costPerPassenger = pricePerPassenger + addonCostPerPassenger;

  // Total cost for all passengers
  const totalCost = costPerPassenger * passengers.length;

  // Let's say tax is 18% GST on total cost
  const tax = totalCost * 0.18;

  const grandTotal = totalCost + tax;

  const handleConfirmPayment = () => {
    alert('Payment confirmed! Thank you for your booking.');
    // Redirect to home or another page after payment
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Payment Summary</h2>
      <hr />
      <p><strong>Contact Phone:</strong> {customerContact.phone}</p>
      <p><strong>Contact Email:</strong> {customerContact.email}</p>
      <p><strong>Trip Duration:</strong> {tripDays} day(s)</p>
      <p><strong>Passengers:</strong> {passengers.length}</p>

      <h4>Cost Breakdown</h4>
      <ul>
        <li>Base Price (per passenger): ₹{pricePerPassenger}</li>
        {addons.extraMeals && <li>Extra Meals: ₹{addonsPrices.extraMeals}</li>}
        {addons.guidedTour && <li>Guided Tour: ₹{addonsPrices.guidedTour}</li>}
        {addons.airportPickup && <li>Airport Pickup: ₹{addonsPrices.airportPickup}</li>}
        <li><strong>Total per passenger:</strong> ₹{costPerPassenger}</li>
        <li><strong>Total for {passengers.length} passenger(s):</strong> ₹{totalCost}</li>
        <li><strong>Tax (18% GST):</strong> ₹{tax.toFixed(2)}</li>
      </ul>

      <h3>Grand Total: ₹{grandTotal.toFixed(2)}</h3>

      <button className="btn btn-success" onClick={handleConfirmPayment}>
        Confirm Payment
      </button>
    </div>
  );
};

export default Payment;
