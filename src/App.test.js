import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Patrick Pei name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Patrick Pei/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders header title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { level: 1 });
  expect(titleElement).toHaveTextContent('Patrick Pei');
});

test('renders contact email', () => {
  render(<App />);
  const emailElement = screen.getByText(/yingjianpei2022@u.northwestern.edu/i);
  expect(emailElement).toBeInTheDocument();
});
