import React, { useState } from 'react';
import './Contact_Us.css';

export default function Contact_Us() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: '',
    message: '',
  });

  const handleKeyPress = (event) => {
    const regularExpression = /^[0-9]$/;
    if (!regularExpression.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNum: formData.phoneNum,
      message: formData.message,
    };

    // Store the newFormData in an array
    const storedData = [];
    storedData.push(newFormData);

    // Clear the form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
      message: '',
    });
  };

  return (
    <div className='contact_us'>
      <h2>FEEL FREE TO SEND US A MESSAGE!</h2>
      <form
        action="#"
        method='post'
        className='contact_form'
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="FirstName"
          id="firstName"
          placeholder='First Name'
          maxLength={10}
          required
          value={formData.firstName}
          onChange={(event) => {
            setFormData({ ...formData, firstName: event.target.value });
          }}
        />
        <input
          type="text"
          name="LastName"
          id="lastName"
          placeholder='Last Name'
          maxLength={10}
          required
          value={formData.lastName}
          onChange={(event) => {
            setFormData({ ...formData, lastName: event.target.value });
          }}
        />
        <input
          type="email"
          name="Email"
          id="email"
          placeholder='Email'
          required
          value={formData.email}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
        />
        <input
          type="text"
          name="Phone"
          id="phoneNum"
          placeholder='Phone'
          onKeyPress={(event) => handleKeyPress(event)}
          required
          value={formData.phoneNum}
          onChange={(event) => {
            setFormData({ ...formData, phoneNum: event.target.value });
          }}
        />
        <textarea
          name="message"
          id="Message"
          cols="145"
          rows="10"
          placeholder='Type your message here!'
          required
          value={formData.message}
          onChange={(event) => {
            setFormData({ ...formData, message: event.target.value });
          }}
        ></textarea>
        <br /><br />
        <input type="submit" value="SEND MESSAGE" />
      </form>
    </div>
  );
}
