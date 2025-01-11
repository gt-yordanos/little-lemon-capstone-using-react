import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '../pages/Menu';

describe('Menu Component', () => {
  test('renders the title correctly', () => {
    render(<Menu />);
    const title = screen.getByText('Our Menu');
    expect(title).toBeInTheDocument();
  });

  test('renders all menu items', () => {
    render(<Menu />);

    const menuItems = [
      'Pizza',
      'Sushi',
      'Pasta',
      'Steak',
      'Tacos',
      'Ice Cream',
      'Smoothie',
      'Pancakes',
      'Ramen',
      'Fried Rice',
    ];

    menuItems.forEach((item) => {
      const menuItem = screen.getByText(item);
      expect(menuItem).toBeInTheDocument();
    });
  });

  test('displays the correct details for each menu item', () => {
    render(<Menu />);

    const foodDetails = [
      {
        name: 'Pizza',
        price: '$18',
        description: 'Wood-fired pizza with fresh mozzarella and basil. A taste of Italy.',
      },
      {
        name: 'Sushi',
        price: '$20',
        description: 'Assorted sushi platter with fresh fish and vegetables. A Japanese delight.',
      },
      {
        name: 'Pasta',
        price: '$15',
        description: 'Creamy Alfredo pasta with grilled chicken and parmesan cheese. A classic Italian dish.',
      },
      {
        name: 'Steak',
        price: '$25',
        description: 'Grilled ribeye steak cooked to perfection. Served with mashed potatoes and asparagus.',
      },
      {
        name: 'Tacos',
        price: '$8',
        description: 'Soft shell tacos filled with seasoned beef, lettuce, and cheese. A Mexican favorite.',
      },
      {
        name: 'Ice Cream',
        price: '$5',
        description: 'Creamy vanilla ice cream with a choice of chocolate or strawberry topping.',
      },
      {
        name: 'Smoothie',
        price: '$7',
        description: 'Refreshing fruit smoothie made with a blend of fresh berries and yogurt.',
      },
      {
        name: 'Pancakes',
        price: '$9',
        description: 'Fluffy pancakes topped with maple syrup and fresh fruit. Perfect for breakfast.',
      },
      {
        name: 'Ramen',
        price: '$14',
        description: 'Delicious ramen noodles in a savory broth with sliced pork, egg, and green onions.',
      },
      {
        name: 'Fried Rice',
        price: '$10',
        description: 'Fragrant fried rice with shrimp, vegetables, and a hint of soy sauce. A quick favorite.',
      },
    ];

    foodDetails.forEach(({ name, price, description }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(price)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });
});
