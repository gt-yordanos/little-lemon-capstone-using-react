import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  test('renders the main title and subtitle', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const title = screen.getByText(/Little Lemon/i);
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(/Chicago/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('renders the description', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    const descriptionPart1 = screen.getByText(
      /We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./i
    );
    const descriptionPart2 = screen.getByText(
      /Our chefs use only the freshest ingredients to create dishes that are both flavorful and healthy./i
    );

    expect(descriptionPart1).toBeInTheDocument();
    expect(descriptionPart2).toBeInTheDocument();
  });

  test('renders the "Reserve a Table" button with correct link', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    const button = screen.getByRole('button', { name: /reserve a table/i });
    expect(button).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /reserve a table/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/reserve');
  });

  test('renders the hero image with proper attributes', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    const image = screen.getByAltText('');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('hero-image');
    expect(image).toHaveAttribute('src', expect.stringContaining('saladImage.jpg'));
  });
});
