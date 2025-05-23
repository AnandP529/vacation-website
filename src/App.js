import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingpage/LandingPage";
import Cards from "./components/cards/Cards";
import InfoBox from "./components/info-box/InfoBox";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import CustomerDetails from './components/customerdetails/CustomerDetails';
import Payment from './components/payment/Payment';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <Cards />
                <InfoBox />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/customer-details" element={<CustomerDetails/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
