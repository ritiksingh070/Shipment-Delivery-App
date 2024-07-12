import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to the Shipment Delivery App</h1>
        <h4>Manage and track your shipments with ease.</h4>
      </div>

      <div className="home-main">
        <section className="home-section about-section">
          <h2>About Us</h2>
          <div className="section-content aboutImg">
            <p>
              Welcome to the Shipment Delivery App, your trusted partner in
              managing and tracking shipments with ease. We understand the
              importance of reliable logistics in today's fast-paced world, and
              our mission is to simplify the process of sending and receiving
              packages for individuals and businesses alike.<br></br>
              <br />
              At Shipment Delivery App, our mission is clear: to provide fast,
              secure, and transparent shipment solutions tailored to meet your
              needs. Whether you're sending a gift across town or fulfilling
              orders globally, we're here to ensure your packages arrive safely
              and on time.
            </p>
            <img
              src={"images/home.webp"}
              alt="Package"
              className="home-image"
            />
          </div>
        </section>

        <section className="home-section services-section">
          <div className="section-content">
            <h2>Our Services</h2>
            <ul>
              <li>
                <h3>Fast and Reliable Shipment Handling</h3>
                <p>
                  Experience swift and efficient shipment handling services
                  designed to meet your delivery deadlines.
                </p>
              </li>
              <li>
                <h3>Real-time Shipment Tracking</h3>
                <p>
                  Stay informed every step of the way with our real-time
                  tracking feature. Monitor your packages from pickup to
                  delivery.
                </p>
              </li>
              <li>
                <h3>Secure Payment Options</h3>
                <p>
                  Choose from a variety of secure payment methods, ensuring your
                  financial information remains protected.
                </p>
              </li>
              <li>
                <h3>Dedicated Customer Support</h3>
                <p>
                  Our customer support team is available round the clock to
                  assist you with any queries or issues.
                </p>
              </li>
              <li>
                <h3>Customized Solutions</h3>
                <p>
                  Tailored shipping solutions to meet the specific needs of
                  individuals and businesses alike.
                </p>
              </li>
              <li>
                <h3>Reliable Partnerships</h3>
                <p>
                  Partnered with trusted carriers and logistics providers to
                  ensure reliable and efficient delivery services.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="home-section reviews-section">
          <div className="section-content">
            <h2>Customer Reviews</h2>
            <div className="review">
              <div className="review-header">
                <img
                 src={"images/1.jpeg"}
                  alt="User"
                  className="review-avatar"
                />
                <div>
                  <h3>John Doe</h3>
                  <p className="review-date">July 12, 2024</p>
                </div>
              </div>
              <p className="review-text">
                "Great service! I received my package on time without any
                issues."
              </p>
            </div>

            <div className="review">
              <div className="review-header">
                <img
                 src={"images/1.jpeg"}
                  alt="User"
                  className="review-avatar"
                />
                <div>
                  <h3>Jane Smith</h3>
                  <p className="review-date">July 10, 2024</p>
                </div>
              </div>
              <p className="review-text">
                "Highly recommend this app for anyone looking for reliable
                shipment services. I used it to send packages overseas, and
                everything arrived on time without any issues. Great service!"
              </p>
            </div>

            <div className="review">
              <div className="review-header">
                <img
                 src={"images/1.jpeg"}
                  alt="User"
                  className="review-avatar"
                />
                <div>
                  <h3>John Doe</h3>
                  <p className="review-date">July 12, 2024</p>
                </div>
              </div>
              <p className="review-text">
                "I've been using this app for all my business shipments, and I'm
                impressed with the efficiency and real-time tracking features.
                It helps me stay organized and informed."
              </p>
            </div>

            <div className="review">
              <div className="review-header">
                <img
                  src={"images/1.jpeg"}
                  alt="User"
                  className="review-avatar"
                />
                <div>
                  <h3>Sarah Brown</h3>
                  <p className="review-date">July 15, 2024</p>
                </div>
              </div>
              <p className="review-text">
                "The customer support team was incredibly helpful when I had
                questions about my shipment. They resolved my issue promptly and
                made sure my package arrived on time."
              </p>
            </div>
          </div>
        </section>

        <section className="home-section contact-section">
          <div className="section-content">
            <h2>Contact Us</h2>
            <p>
              Have questions? Feel free to <a href="/contact">contact us</a> for
              more information about our services.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
