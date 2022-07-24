import React from 'react';
import { render } from '@testing-library/react';
import FilmGrid from './FilmGrid';

jest.mock('../../customHooks/useFilmsContextValue', () => ({
  __esModule: true,
  default: () => ({
    state: {
      results: [],
    },
    isLoading: false,
  }),
}));

describe('<FilmGrid/>', () => {
  test('should render films list after api call', () => {
    render(<FilmGrid />);
  });
});
