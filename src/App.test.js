import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Navbar from './component/Nav/Navbar';



describe('Main Page', () => {
  test('Contact', () => {
    render(<App />, {wrapper: BrowserRouter});
    expect(undefined).toBeUndefined();
  });


  test('renders Navbar', () => {
    render(<Navbar />, {wrapper: BrowserRouter});
    const linkElement = screen.getByText(/Contact/i);
    screen.findAllByText("contact").then((m)=>m.toBeInTheDocument());
    screen.findAllByText("blog").then((m)=>m.toBeInTheDocument());
    screen.findAllByText("home").then((m)=>m.toBeInTheDocument());
    expect(linkElement).toBeInTheDocument();
  });
  

});

test('renders main page', () => {
  render(<App />, {wrapper: BrowserRouter});
  const linkElement = screen.getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
  expect(undefined).toBeUndefined();
});

