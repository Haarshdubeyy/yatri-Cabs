import React from 'react';
import { MapPin, Calendar, ArrowRight, Download, Phone } from 'lucide-react';
import Footer from './Components/Footer/Footer';
import './Styles/Styles.css';
import Contact from "./Components/24/24X7"

const CabBookingLanding = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">YATRI CABS</div>
        <div className="header-right">
          <div className="phone-number">
            {/* <Phone className="icon" /> */}
            {/* <span>24x7 +917860663399</span> */}
            <Contact/>
          </div>
          <button className="download-button">
            <Download className="icon" />
            Download App
          </button>
        </div>
      </header>

      <div className="hero-section fade-in">
        <img
          src="/src/assets/scenry.jpg"
          alt="Mountain landscape"
          className="hero-image"
        />

        <div className="booking-form">
          <div className="trip-type-buttons">
            <button className="active">Outstation</button>
            <button>Local</button>
            <button>Airport</button>
          </div>

          <div className="trip-direction-buttons">
            <button className="active">One Way</button>
            <button>Round Trip</button>
          </div>

          <div className="form-inputs">
            <div className="input-group">
              <label>FROM</label>
              <div className="input-with-icon">
                <MapPin className="icon" />
                <input placeholder="Enter city" />
              </div>
            </div>
            <div className="input-group">
              <label>TO</label>
              <div className="input-with-icon">
                <MapPin className="icon" />
                <input placeholder="Enter city" />
              </div>
            </div>
            <div className="input-group">
              <label>PICK UP DATE</label>
              <div className="input-with-icon">
                <Calendar className="icon" />
                <input type="date" />
              </div>
            </div>
            <div className="input-group">
              <label>PICK UP AT</label>
              <div className="input-with-icon">
                <input type="time" />
              </div>
            </div>
          </div>

          <button className="explore-button">EXPLORE CABS</button>
        </div>
      </div>

      <div className="features fade-in">
        <div className="feature">
          <h3>Transparent Billing</h3>
          <p>GPS Based Billing | No Km Tampering</p>
        </div>
        <div className="feature">
          <div className="app-stores">
            <img src="/src/assets/playStore.png" alt="Play Store" />
            <img src="/src/assets/images.jpg" alt="App Store" />
          </div>
        </div>
        <div className="feature">
          <h3>No return fare</h3>
          <p>One-Way cab fare | No hidden charges</p>
        </div>
      </div>

      <div className="car-types fade-in">
        <h2>Available Car Types</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>CAR TYPE</th>
                <th>MODEL INCLUDES</th>
                <th>PASSENGERS</th>
                <th>IDEAL FOR</th>
                <th>FARE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AC Sedans</td>
                <td>Etios, Amaze, Dzire etc.</td>
                <td>4 Pax</td>
                <td>Comfortable trips with small families</td>
                <td>Rs.11/KM</td>
              </tr>
              <tr>
                <td>AC Hatchbacks</td>
                <td>Wagon R, Celerio, Micra etc.</td>
                <td>4 Pax</td>
                <td>Budget trips over short distances</td>
                <td>Rs.11/KM</td>
              </tr>
              <tr>
                <td>AC SUV</td>
                <td>Ertiga, Xylo etc.</td>
                <td>6-7 Pax</td>
                <td>Premium trips with large families</td>
                <td>Rs.13/KM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="why-choose fade-in">
        <h2>Why Choose One Way Cab?</h2>
        <div
className="reasons">
          <div className="reason-group">
            <ul>
              <li>
                <ArrowRight className="icon" />
                <span>Instant Booking & Confirmation</span>
              </li>
              <li>
                <ArrowRight className="icon" />
                <span>No Return Fare For One-Way Trip</span>
              </li>
              <li>
                <ArrowRight className="icon" />
                <span>Clean & Professional Cab Services</span>
              </li>
              <li>
                <ArrowRight className="icon" />
                <span>Transparent Billing With GPS Based System</span>
              </li>
            </ul>
          </div>
          <div className="reason-group">
            <ul>
              <li>
                <ArrowRight className="icon" />
                <span>Pick-Up From Your House</span>
              </li>
              <li>
                <ArrowRight className="icon" />
                <span>Dedicated Cab Just For You</span>
              </li>
              <li>
                <ArrowRight className="icon" />
                <span>Drop To Your Desired Destination</span>
              </li>
              <li>
                <ArrowRight className="icon" />
                <span>Multiple Payment Options Including Credit Card</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CabBookingLanding;

