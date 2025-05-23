import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerDetails = () => {
  const navigate = useNavigate();

  const [passengers, setPassengers] = useState([{ fullName: '', age: '', gender: '' }]);
  const [customerContact, setCustomerContact] = useState({ phone: '', email: '' });
  const [tripDays, setTripDays] = useState(1);
  const [addons, setAddons] = useState({
    extraMeals: false,
    guidedTour: false,
    airportPickup: false,
  });

  const handlePassengerChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...passengers];
    list[index][name] = value;
    setPassengers(list);
  };

  const handleCustomerContactChange = (e) => {
    const { name, value } = e.target;
    setCustomerContact(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPassenger = () => {
    setPassengers([...passengers, { fullName: '', age: '', gender: '' }]);
  };

  const handleRemovePassenger = (index) => {
    const list = [...passengers];
    list.splice(index, 1);
    setPassengers(list);
  };

  const handleAddonChange = (e) => {
    const { name, checked } = e.target;
    setAddons(prev => ({ ...prev, [name]: checked }));
  };

  const handleTripDaysChange = (e) => {
    setTripDays(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      customerContact,
      passengers,
      tripDays,
      addons,
    };
    // Navigate to payment page with booking data
    navigate('/payment', { state: bookingData });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Customer Booking Details</h2>
      <form onSubmit={handleSubmit}>
        <h5>Customer Contact</h5>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            value={customerContact.phone}
            onChange={handleCustomerContactChange}
            required
            placeholder="Enter phone number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={customerContact.email}
            onChange={handleCustomerContactChange}
            required
            placeholder="Enter email"
          />
        </div>

        <h5>Passengers</h5>
        {passengers.map((passenger, index) => (
          <div key={index} className="border rounded p-3 mb-3">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                value={passenger.fullName}
                onChange={(e) => handlePassengerChange(index, e)}
                required
                placeholder="Enter full name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="age"
                min="0"
                max="120"
                className="form-control"
                value={passenger.age}
                onChange={(e) => handlePassengerChange(index, e)}
                required
                placeholder="Enter age"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                name="gender"
                className="form-select"
                value={passenger.gender}
                onChange={(e) => handlePassengerChange(index, e)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {passengers.length > 1 && (
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => handleRemovePassenger(index)}
              >
                Remove Passenger
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary mb-4"
          onClick={handleAddPassenger}
        >
          + Add Passenger
        </button>

        <div className="mb-3">
          <label htmlFor="tripDays" className="form-label">Trip Duration (days)</label>
          <input
            type="number"
            className="form-control"
            id="tripDays"
            name="tripDays"
            min="1"
            max="30"
            value={tripDays}
            onChange={handleTripDaysChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Add-ons</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="extraMeals"
              name="extraMeals"
              checked={addons.extraMeals}
              onChange={handleAddonChange}
            />
            <label className="form-check-label" htmlFor="extraMeals">
              Extra Meals (+₹500)
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="guidedTour"
              name="guidedTour"
              checked={addons.guidedTour}
              onChange={handleAddonChange}
            />
            <label className="form-check-label" htmlFor="guidedTour">
              Guided Tour (+₹1500)
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="airportPickup"
              name="airportPickup"
              checked={addons.airportPickup}
              onChange={handleAddonChange}
            />
            <label className="form-check-label" htmlFor="airportPickup">
              Airport Pickup (+₹800)
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit Booking</button>
      </form>
    </div>
  );
};

export default CustomerDetails;
