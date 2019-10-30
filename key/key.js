// code to be tested

handleSubmit = (event) => {
  event.preventDefault();
  const payload = { ...this.state };

  console.log(payload);
};

handleChange = (event) => {
  this.setState({
    [event.target.id]: event.target.value
  });
};

//tests
import React from 'react';
import LogInForm from '../LogInForm';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/*
 * Test are just chunks of code that are used to test code that manages our business logic.
 * Testing can be integrated into your deployment pipeline to make sure you don't ship any breaking bugs
 */

afterEach(cleanup);

//Let's start by taking a snapshot of the form component. A snapshot is a look at how the component renders and looks for unexpected changes.
//snap shot are an test a component's implementation, which, can change. They are easily updated and truthfully, not that useful.

it('renders correctly', () => {
  const { container } = render(<LogInForm />);
  expect(container.firstChild).toMatchSnapshot();
});

/**
 * Unit tests are the most basic form of testing. They are meant to test the methods belonging to a class
 * Let's try writing a unit test for handling inputs
 */

it('It updates inputs', () => {
  const { getByLabelText } = render(<LogInForm />);
  const userEmail = 'jim@spyemail.com';
  const userPass = '12345!';
  const emailInput = getByLabelText('Email:');
  const passwordInput = getByLabelText('Password:');

  fireEvent.change(emailInput, { target: { value: userEmail } });
  fireEvent.change(passwordInput, { target: { value: userPass } });

  expect(emailInput.value).toBe(userEmail);
  expect(passwordInput.value).toBe(userPass);
});

/**
 * This test will fail, which is what we were expecting, as we haven't yet create this method inside the form class
 */
it('up gets user login info', () => {
  const fakeUser = {
    email: 'jim@spyemail.com',
    password: '12345!'
  };
  const mockFunction = jest.fn();
  const { getByText } = render(<LogInForm onSubmit={mockFunction(fakeUser)} />);
  const button = getByText('Let us track you');

  fireEvent.click(button);

  expect(mockFunction).toHaveBeenCalledTimes(1);
  expect(mockFunction).toHaveBeenCalledWith(fakeUser);
});
