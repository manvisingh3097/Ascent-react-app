import React from 'react';

const Contact = () => {
  const showMenu = () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
  };

  const hideMenu = () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
  };

  return (
    <div>
      <section className="sub-header">
        
        <h1 className="text-center mt-3"> CONTACT US </h1>
      </section>

      <section className="contact-content py-5">
        <div className="container"/>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-form">
                <form method="post" action="contact-form-handler.php">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="form-control mb-3"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="form-control mb-3"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter your Query"
                    required
                    className="form-control mb-3"
                  />
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Message"
                    required
                    className="form-control mb-3"
                  ></textarea>
                  <button type="submit" className="btn btn-danger">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map-container">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8389551538053!2d78.35360167537799!3d17.467420500494168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb924b53d9165b%3A0x61bf243544c72d29!2sCyber%20Nest!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                 <div className="col-md-6">
              <div className="contact-details">
                <div className="contact-col">
                  <div >
                    <i className="fa fa-home"></i>
                    <span>
                      <h5>Cyber nest Appartment</h5>
                      <p>Hyderabad, Telangana, IN</p>
                    </span>
                  </div>
                  <div>
                    <i className="fa fa-phone"></i>
                    <span>
                      <h5>+91 8978777689</h5>
                      <p>Monday to Friday 10 Am to 6 Pm</p>
                    </span>
                  </div>
                  <div>
                    <i className="fa fa-envelope-o"></i>
                    <span>
                      <h5>harsha@ascent-i-tech.in</h5>
                      <p>Email us your query</p>
                    </span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;
