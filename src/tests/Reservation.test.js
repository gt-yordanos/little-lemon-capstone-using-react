import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Reservation from '../pages/Reservation';

describe('Reservation Component', () => {
  test('renders all form fields correctly', () => {
    render(<Reservation />);

    // Check if the form fields are rendered
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const phoneInput = screen.getByPlaceholderText('Phone');
    const dateInput = screen.getByPlaceholderText(/date/i);
    const timeInput = screen.getByPlaceholderText(/time/i);
    const dinersLabel = screen.getByText('Number of Diners:');
    const reserveButton = screen.getByText('Reserve Table');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(dinersLabel).toBeInTheDocument();
    expect(reserveButton).toBeInTheDocument();
  });

  test('shows error messages for required fields', async () => {
    render(<Reservation />);

    const reserveButton = screen.getByText('Reserve Table');

    // Submit the form without filling in fields
    await act(async () => {
      fireEvent.click(reserveButton);
    });

    // Check for error messages
    expect(screen.getAllByText('This field is required')).toHaveLength(5); // Name, Email, Phone, Date, Time
  });

  test('updates number of diners correctly', () => {
    render(<Reservation />);

    const decreaseButton = screen.getByText('-');
    const increaseButton = screen.getByText('+');
    const dinersCount = screen.getByText('1');

    // Increase diners
    fireEvent.click(increaseButton);
    expect(screen.getByText('2')).toBeInTheDocument();

    // Decrease diners
    fireEvent.click(decreaseButton);
    expect(dinersCount.textContent).toBe('1');

    // Ensure diners do not go below 1
    fireEvent.click(decreaseButton);
    expect(dinersCount.textContent).toBe('1');
  });

  test('submits the form with valid data', async () => {
    const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Reservation />);

    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const phoneInput = screen.getByPlaceholderText('Phone');
    const dateInput = screen.getByPlaceholderText(/date/i);
    const timeInput = screen.getByPlaceholderText(/time/i);
    const reserveButton = screen.getByText('Reserve Table');

    // Fill in form fields
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(dateInput, { target: { value: '2025-01-15' } });
    fireEvent.change(timeInput, { target: { value: '18:00' } });

    // Submit the form
    await act(async () => {
      fireEvent.click(reserveButton);
    });

    // Check console log
    expect(mockConsoleLog).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      date: '2025-01-15',
      time: '18:00',
      diners: 1,
    });

    mockConsoleLog.mockRestore();
  });
});
