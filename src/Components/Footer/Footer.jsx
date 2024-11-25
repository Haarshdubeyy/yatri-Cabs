import React from 'react';
import { ChevronRight, Car } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import './Styles.css'; 

const YatriCarRental = () => {
  
  const oneWayFeatures = [
    { text: "Instant Booking & Confirmation" },
    { text: "Confirmed Booking Immediately" },
    { text: "No Return Fare For One-Way Trip" },
    { text: "Clean & Professional Cab Services" },
    { text: "Transparent Billing With GPS Based Billing System" },
  ];

  const rightSideFeatures = [
    { text: "Pick-Up From Your House" },
    { text: "Dedicated Cab Just For You" },
    { text: "Drop To Your Desired Destination" },
    { text: "Completed More Than 20,000+ Oneway Trips" },
    { text: "Multiple Payment Option Including Credit Card." },
  ];

  const companyFeatures = [
    {
      title: "Service You Can Trust",
      description:
        "We are dedicated to providing dependable services in INDIA. We guarantee that we won't cancel any bookings without advance notification.",
    },
    {
      title: "Safety is Our Priority",
      description:
        "We exclusively hire experienced and skilled drivers who possess in-depth knowledge of the city's roads and traffic regulations.",
    },
    {
      title: "Expert Chauffeurs at Your Service",
      description:
        "We take pride in selecting only the most skilled, knowledgeable, and courteous drivers.",
    },
    {
      title: "Extensive Industry Experience",
      description:
        "With over 10 years of industry expertise, we're your go-to choice for premium car hire services.",
    },
    {
      title: "Proven Track Record",
      description:
        "Our commitment is evident in our outstanding Google ratings of 4.8 stars or higher.",
    },
  ];


return (
    <div className="container">

      <div className="text-center">
        <h1 className="title">WHY CHOOSE ONE WAY CAB?</h1>
      </div>

      <div className="features-grid">
        <Card className="card">
          <CardContent className="card-content">
            <ul>
              {oneWayFeatures.map((feature, index) => (
                <li key={index} className="feature-item">
                  <ChevronRight className="feature-icon" />
                  <span className="feature-text">{feature.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="center-image">
          <div className="image-container">
            <Car className="car-icon" />
          </div>
        </div>

        <Card className="card">
          <CardContent className="card-content">
            <ul>
              {rightSideFeatures.map((feature, index) => (
                <li key={index} className="feature-item">
                  <ChevronRight className="feature-icon" />
                  <span className="feature-text">{feature.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center py-8">
        <h2 className="section-title">DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS 
          <span className="text-green-800"> INTERCITY CAR RENTALS</span>
        </h2>
        <p className="section-description">
          IN INDIA - WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!
        </p>
      </div>

      <div className="green-banner">
        <h2 className="text-xl font-bold">
          DISCOVERING INDIA'S DIVERSE LANDSCAPES,<br />
          ONE SCENIC ROAD TRIP AT A TIME
        </h2>
      </div>

      <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-800 text-center">WHY CHOOSE YATRI CAR RENTAL?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {companyFeatures.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-green-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          {['Home', 'About', 'Services', 'News', 'Contact', 'Privacy Policy'].map((item) => (
            <a key={item} href="#" className="footer-link">{item}</a>
          ))}
        </div>
        <div>
          <input
            type="email"
            placeholder="Newsletter"
            className="newsletter-input"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">→</button>
        </div>
        <div>All Copyrights are reserved by YATRI CABS</div>
      </footer>
    </div>
);
};

export default YatriCarRental;