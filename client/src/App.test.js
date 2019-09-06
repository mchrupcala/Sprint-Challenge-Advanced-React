import React from 'react';
import ReactDOM from 'react-dom';
import { getByText, findAllBy } from '@testing-library/dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('header appears on the screen', () => {
  let { getByText} = render(<App />);
  
  getByText(/player list/i);
});

test('toggle button and toggle background appear', () => {
  let { getByTestId} = render(<App />);
  
  getByTestId(/toggle-background-div/i);
  getByTestId(/toggle-button/i);

});

test('test that the nav bar is rendering', () => {
  let { getByText} = render(<App />);
  
  getByText(/home/i);
  getByText(/about/i);
});