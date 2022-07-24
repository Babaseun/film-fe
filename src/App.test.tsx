import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>.', () => {
  it('renders app component', () => {
    render(<App />);
    const title = screen.getByText(/Films Resource/i);
    expect(title).toBeInTheDocument();
  });
});
