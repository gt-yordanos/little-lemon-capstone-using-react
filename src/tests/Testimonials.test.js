import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  test('renders the title correctly', () => {
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

  test('renders the description text', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    const description = screen.getByText(
      /We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./i
    );
    expect(description).toBeInTheDocument();

    const additionalDescription = screen.getByText(
      /Our chefs use only the freshest ingredients to create dishes that are both flavorful and healthy./i
    );
    expect(additionalDescription).toBeInTheDocument();
  });

  test('renders the Reserve a Table button with a correct link', () => {
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

  test('renders the hero image', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    const image = screen.getByAltText('');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('hero-image');
  });
});
