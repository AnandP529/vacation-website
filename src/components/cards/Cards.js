import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom'; // for navigation
import card1 from '../../assests/images/Card1.jpg';
import card2 from '../../assests/images/Card2.jpeg';
import card3 from '../../assests/images/Card3.jpeg';
import card4 from '../../assests/images/Card4.jpeg';

function Cards() {
  const navigate = useNavigate();  // hook for navigation

  // Prices per person for each city
  const prices = {
    Paris: 5000,
    Bangkok: 4000,
    Indonesia: 4500,
    Malaysia: 6000,
  };

  const handleBookNow = (city, price) => {
    // Pass the selected city and price to customer-details page
    navigate('/customer-details', { state: { city, pricePerPerson: price } });
  };

  return (
    <Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={card1} alt="Paris" className="img-fluid" />
              <div className="card-body">
                <h4 className="card-title">Paris</h4>
                <p className="card-text">
                  The city of lights, rich in culture, art, and delicious cuisine.
                </p>
                <p><strong>₹{prices.Paris} per person</strong></p>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => handleBookNow("Paris", prices.Paris)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={card2} alt="Bangkok" className="img-fluid" />
              <div className="card-body">
                <h4 className="card-title">Bangkok</h4>
                <p className="card-text">
                  A vibrant city known for its street food, temples, and nightlife.
                </p>
                <p><strong>₹{prices.Bangkok} per person</strong></p>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => handleBookNow("Bangkok", prices.Bangkok)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={card3} alt="Indonesia" className="img-fluid" />
              <div className="card-body">
                <h4 className="card-title">Indonesia</h4>
                <p className="card-text">
                  Tropical paradise with beautiful beaches, culture, and adventure.
                </p>
                <p><strong>₹{prices.Indonesia} per person</strong></p>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => handleBookNow("Indonesia", prices.Indonesia)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={card4} alt="Malaysia" className="img-fluid" />
              <div className="card-body">
                <h4 className="card-title">Malaysia</h4>
                <p className="card-text">
                  A melting pot of cultures, delicious food, and natural wonders.
                </p>
                <p><strong>₹{prices.Malaysia} per person</strong></p>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => handleBookNow("Malaysia", prices.Malaysia)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default Cards;
