import React from 'react';
import LogInForm from '../LogInForm';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

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
