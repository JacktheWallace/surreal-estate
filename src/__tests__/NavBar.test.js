import { render, screen } from "@testing-library/react";
import App from "../components/App.js"

test('render a link to the view properties page', () => {
    render(<App />);
    const linkElement = screen.getByText(/view properties/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders a link to the add a property page', () => {
    render(<App />)
    const linkElement = screen.getByText(/add a property/i);
    expect(linkElement).toBeInTheDocument();
  });
