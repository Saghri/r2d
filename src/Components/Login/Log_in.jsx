import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../images/footer logo.png'
import "./Log_in.css";

export default function Log_in() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    console.log("Login data:", data);

  };

  return (
    <div className="container">
        <div className="login-page">
        <div className="logo">
            <img src={logo} alt="" />
            </div>
      <Form onSubmit={handleSubmit}>
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
          Login
        </Button>
        <p className="link">Don't have an account? <Link exact to='/Signup'>Register</Link> now!</p>
      </Form>
    </div>
    </div>
  );
}
