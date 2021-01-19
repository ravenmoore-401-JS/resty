import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Form from './form';

test('updates url message', () => {
  console.log('ima atest')
  render(<Form />);
  const goBtn = screen.getByTestId('go-button');
  fireEvent.click(goBtn);
  const message = screen.getByTestId('message1');
  console.log(message)
  expect(message).toHaveTextContent(200);
});
