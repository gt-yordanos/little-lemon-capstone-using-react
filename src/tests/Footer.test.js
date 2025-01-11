import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';
import userEvent from '@testing-library/user-event';

describe('Footer Component', () => {
  test('renders the footer logo with correct link', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const logoLink = screen.getByRole('link', { name: /Little Lemon Logo/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');

    const logoImage = screen.getByAltText('Little Lemon Logo');
    expect(logoImage).toBeInTheDocument();
  });

  test('renders menu links with correct text and links', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = [
      { text: 'Home', href: '/' },
      { text: 'About', href: '#about-us' },
      { text: 'Menu', href: '/menu' },
      { text: 'Reservation', href: '/reserve' },
    ];

    links.forEach(({ text, href }) => {
      const link = screen.getByRole('link', { name: text });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });

    const orderOnline = screen.getByText('Order Online');
    expect(orderOnline).toBeInTheDocument();
  });

  test('renders contact details', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const contactDetails = ['Address', 'Phone Number', 'Email'];
    contactDetails.forEach((detail) => {
      const contactItem = screen.getByText(detail);
      expect(contactItem).toBeInTheDocument();
    });
  });

  test('renders social media links with correct icons and links', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const socialMediaLinks = [
      { name: 'Facebook', href: 'https://www.facebook.com', color: '#4267B2' },
      { name: 'Instagram', href: 'https://www.instagram.com', color: '#C13584' },
      { name: 'Twitter', href: 'https://www.twitter.com', color: '#1DA1F2' },
      { name: 'YouTube', href: 'https://www.youtube.com', color: '#FF0000' },
      { name: 'TikTok', href: 'https://www.tiktok.com', color: '#000000' },
    ];

    socialMediaLinks.forEach(({ name, href, color }) => {
      const link = screen.getByRole('link', { name: new RegExp(name, 'i') });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
      expect(link.firstChild).toHaveStyle(`color: ${color}`);
    });
  });

  test('scrolls to top when clicking links', async () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    global.scrollTo = jest.fn();

    const links = screen.getAllByRole('link');
    const user = userEvent.setup();

    for (const link of links) {
      await user.click(link);
      expect(global.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      });
    }
  });
});
