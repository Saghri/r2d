import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../images/footer logo.png'
import "./Sign_up.css";

export default function Sign_up() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullNameChange = () => {
    const newFullName = `${firstName} ${lastName}`;
    setFullName(newFullName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log("Signup data:", data);

    // Send signup data to your backend server here
  };

  return (
    <div className="container">
        <div className="signup-page">
            <div className="logo">
            <img src={logo} alt="" />
            </div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First Name</Label>

          <Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(event) => {
                setFirstName(event.target.value);
                handleFullNameChange();
              }}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="lastName">Last Name</Label>

          <Input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(event) => {
                setLastName(event.target.value);
                handleFullNameChange();
              }}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>

          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>

          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </FormGroup>

        <Button type="submit" color="primary">
          Register
        </Button>

        <p className="link">Already have an account? <Link exact to='/Login'>Login</Link> now!</p>
      </Form>
    </div>
    </div>
  );
}
