import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it("renders without crashing", () => {
  render(<App />);
});


test("hide form by default", () => {
  render(<App />);
  const formEl = screen.queryByRole('form', { name: "form" });
  expect(formEl).not.toBeInTheDocument()
});

test("render form if button 'Ajoute une news' is clicked", () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  userEvent.click(buttonEl);
  const formEl = screen.getByRole('form', { name: "form" });
  expect(formEl).toBeInTheDocument();
});
