import { render, screen } from '@testing-library/react';
import Home from "./Home";
import SignIn from "./SignIn";

test('renders sign in page', () => {
  render(<SignIn />);
});
