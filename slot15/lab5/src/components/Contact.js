import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agreeTerms: false
  });

  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false || !formData.agreeTerms) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setShowSuccess(true);
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        agreeTerms: false
      });
      setValidated(false);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      {showSuccess && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Form submitted successfully! Thank you for your information.
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setShowSuccess(false)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <div className={`needs-validation ${validated ? 'was-validated' : ''}`}>
        <div className="row mb-3">
          {/* First name */}
          <div className="col-md-4">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input
              type="text"
              className={`form-control ${formData.firstName ? 'is-valid' : validated && !formData.firstName ? 'is-invalid' : ''}`}
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Mark"
              required
            />
            <div className="valid-feedback">
              Looks good!
            </div>
            <div className="invalid-feedback">
              Please provide a valid first name.
            </div>
          </div>

          {/* Last name */}
          <div className="col-md-4">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input
              type="text"
              className={`form-control ${formData.lastName ? 'is-valid' : validated && !formData.lastName ? 'is-invalid' : ''}`}
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Otto"
              required
            />
            <div className="valid-feedback">
              Looks good!
            </div>
            <div className="invalid-feedback">
              Please provide a valid last name.
            </div>
          </div>

          {/* Username */}
          <div className="col-md-4">
            <label htmlFor="username" className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text">@</span>
              <input
                type="text"
                className={`form-control ${!formData.username && validated ? 'is-invalid' : ''}`}
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
              />
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          {/* City */}
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              className={`form-control ${!formData.city && validated ? 'is-invalid' : ''}`}
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
            <div className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>

          {/* State */}
          <div className="col-md-3">
            <label htmlFor="state" className="form-label">State</label>
            <input
              type="text"
              className={`form-control ${!formData.state && validated ? 'is-invalid' : ''}`}
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              required
            />
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          {/* Zip */}
          <div className="col-md-3">
            <label htmlFor="zip" className="form-label">Zip</label>
            <input
              type="text"
              className={`form-control ${!formData.zip && validated ? 'is-invalid' : ''}`}
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Zip"
              required
            />
            <div className="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>

        {/* Terms checkbox */}
        <div className="mb-3">
          <div className="form-check">
            <input
              className={`form-check-input ${!formData.agreeTerms && validated ? 'is-invalid' : ''}`}
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="agreeTerms">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>

        {/* Submit button */}
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit form
        </button>
      </div>
    </div>
  );
}

export default Contact;