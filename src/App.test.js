import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

describe('App', () => {
  it('renders without error', () => {
    render(<App />);
  });
});
