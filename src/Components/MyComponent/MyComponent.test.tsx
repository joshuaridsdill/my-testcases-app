import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders the component with the correct name', () => {
    const name = 'John';
    render(<MyComponent name={name} />);

    const greetingElement = screen.getByText(`Hello, ${name}!`);
    expect(greetingElement).toBeInTheDocument();
  });
});