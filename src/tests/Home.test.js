import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import userEvent from '@testing-library/user-event';

describe('Home Component', () => {
  test('renders Hero component correctly', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const heroText = screen.getByText(/Little Lemon/i);
    const heroButton = screen.getByRole('link', { name: /Reserve a Table/i });
    expect(heroText).toBeInTheDocument();
    expect(heroButton).toBeInTheDocument();
  });

  test('renders the weekly specials section', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const specialsHeading = screen.getByRole('heading', { name: /This Weeks specials/i });
    expect(specialsHeading).toBeInTheDocument();

    const menuButton = screen.getByRole('link', { name: /Menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  test('renders food cards correctly for each item in the menu', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const foodDetails = [
      "Salad", "Pizza", "Burger", "Sushi"
    ];

    foodDetails.forEach((food) => {
      const foodName = screen.getByText(food);
      expect(foodName).toBeInTheDocument();
    });

    const menuItems = screen.getAllByRole('img');
    expect(menuItems).toHaveLength(4);
  });

  test('renders Testimonials and AboutUs components', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const testimonials = screen.getByText(/Testimonials/i);
    const aboutUs = screen.getByText(/About Us/i);

    expect(testimonials).toBeInTheDocument();
    expect(aboutUs).toBeInTheDocument();
  });

  test('clicking the "Menu" button navigates to the menu page', async () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const menuButton = screen.getByRole('link', { name: /Menu/i });
    const user = userEvent.setup();

    await user.click(menuButton);

    expect(window.location.pathname).toBe('/menu');
  });
});
