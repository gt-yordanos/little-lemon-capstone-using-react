import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

jest.mock('../components/MobileMenu', () => ({ activeLink, handleLinkClick }) => (
  <div data-testid="mobile-menu">
    <button onClick={() => handleLinkClick('/menu')}>Menu</button>
    <button onClick={() => handleLinkClick('/reserve')}>Reservation</button>
  </div>
));

describe('Navbar Component', () => {
  test('renders all navbar elements correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Check if the Little Lemon logo is rendered
    const logo = screen.getByAltText('Little Lemon Logo');
    expect(logo).toBeInTheDocument();

    // Check if all navigation links are rendered
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const menuLink = screen.getByText('Menu');
    const reservationLink = screen.getByText('Reservation');
    const orderButton = screen.getByText('Order Online');
    const loginButton = screen.getByText('Login');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(reservationLink).toBeInTheDocument();
    expect(orderButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('toggles the mobile menu visibility', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Check if the hamburger menu is rendered initially
    const hamburgerIcon = screen.getByTestId('hamburger-icon');
    expect(hamburgerIcon).toBeInTheDocument();

    // Click the hamburger menu to open the mobile menu
    fireEvent.click(hamburgerIcon);
    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu).toBeInTheDocument();

    // Check if the close icon is displayed
    const closeIcon = screen.getByTestId('close-icon');
    expect(closeIcon).toBeInTheDocument();

    // Click the close icon to close the mobile menu
    fireEvent.click(closeIcon);
    expect(screen.queryByTestId('mobile-menu')).toBeNull();
  });

  test('changes active link when clicked', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    const menuLink = screen.getByText('Menu');

    // Initial state: Home link should be active
    expect(homeLink.closest('li')).toHaveClass('active');
    expect(menuLink.closest('li')).not.toHaveClass('active');

    // Click on the Menu link
    fireEvent.click(menuLink);

    // Check if the Menu link is now active
    expect(homeLink.closest('li')).not.toHaveClass('active');
    expect(menuLink.closest('li')).toHaveClass('active');
  });

  test('calls handleLinkClick when a link in the mobile menu is clicked', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Open the mobile menu
    const hamburgerIcon = screen.getByTestId('hamburger-icon');
    fireEvent.click(hamburgerIcon);

    const menuButton = screen.getByText('Menu');
    fireEvent.click(menuButton);

    // Mobile menu should close after clicking a link
    expect(screen.queryByTestId('mobile-menu')).toBeNull();
  });
});
