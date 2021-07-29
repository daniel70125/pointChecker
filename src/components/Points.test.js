import Points from './Points'
import {render, screen, cleanup} from '@testing-library/react'

test('should render points component', () => {
  render(<Points/>);
  const pointsElement = screen.getByTestId('points-wrapper');
  expect(pointsElement).toBeInTheDocument();
});