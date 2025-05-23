import React, { Fragment } from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // You could handle backend logic here if needed
    this.setState({ submitted: true });
  };

  render() {
    return (
      <Fragment>
        <div className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486418.49887424003!2d82.93293171041705!3d17.737828249494704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1739110504580!5m2!1sen!2sin"
                      width="400"
                      height="350"
                      frameBorder="0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="map"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-7">
                <div className="card">
                  <div className="card-header bg-dark text-white">
                    <h4>Contact Us</h4>
                  </div>
                  <div className="card-body">
                    {this.state.submitted ? (
                      <div className="alert alert-success">
                        Thank you! Our team will get back to you shortly.
                      </div>
                    ) : (
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group mb-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="form-group mb-2">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Mobile"
                            required
                          />
                        </div>
                        <div className="form-group mb-2">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Query"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="submit"
                            className="btn btn-dark btn-sm"
                            value="Submit"
                          />
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
