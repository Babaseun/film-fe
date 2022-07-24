import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Spinner from './Spinner';

describe('<Spinner/>.', () => {
  it('renders spinner component', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveTextContent('Loading');
  });
  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <div className="spinner">
          <p data-testid="spinner">
            Loading.... <i className="fas fa-spinner fa-spin fa-10x" />
          </p>
        </div>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
