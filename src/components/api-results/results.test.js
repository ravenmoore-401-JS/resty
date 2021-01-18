import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Results from './api-results';

xtest('updates url message', () => {
  render(<Results/>);
  const results = screen.getByTestId('reslutsWindow');
  const goBtn = screen.getByTestId('go-button');
  fireEvent.click(goBtn);
  expect(results).toHaveTextContent(200);
});
