import React, { Component } from "react";

import Input from "../common/input";
import "./form.css";
import SiteButton from "../common/button";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      soc: "",
      email: "",
      emailPass: "",
      phone: ""
    };
  }
  render() {
    return (
      <div className="form-holder">
        <div className="container">
          <h2>Sign up, we'd love to track you</h2>
        </div>
        <form>
          <div className="container">
            <Input
              type="text"
              label="First Name"
              id="fName"
              placeholder="Jim"
            />
            <Input
              type="text"
              label="Last Name"
              id="lName"
              placeholder="Joesph"
            />
          </div>
          <div className="container">
            <Input
              type="text"
              label="Social Security Number"
              id="soc"
              placeholder="266-85-3333"
            />
            <Input
              type="email"
              label="Email"
              id="email"
              placeholder="you@you.com"
            />
          </div>
          <div className="container">
            <Input
              type="password"
              label="Email Password"
              id="emailPass"
              placeholder="password for personal email"
            />
            <Input
              type="tel"
              label="phone number"
              id="phone"
              placeholder="206-880-7755"
            />
          </div>
          <div className="button-container">
            <SiteButton type="submit" text="Surrender your Info" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
