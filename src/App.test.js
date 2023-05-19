import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import Slideshow from './components/Slideshow';
import Image from './components/Image';
import axios from 'axios';

jest.mock('axios');

test('renders Slideshow component without crashing', async () => {
  axios.get.mockResolvedValueOnce({
    data: {
      images: { base64: 'base64String1' },
      metadata: { sol: 'metadata1', earth_date: 'metadata1' }
    }
  });

  render(<Slideshow />);

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() => screen.getByAltText(/Mars Rover/i));

  expect(screen.getByAltText(/Mars Rover/i)).toHaveAttribute('src', 'base64String1');
  expect(screen.getByText(/metadata1/i)).toBeInTheDocument();
});

test('renders Image component without crashing', async () => {
  axios.get.mockResolvedValueOnce({
    data: {
      images: { base64: 'base64String1' },
      metadata: {sol: 'metadata1', earth_date: 'metadata1'}
    }
  });

  render(<Image id="1" />);

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() => screen.getByAltText(/Mars Rover/i));

  expect(screen.getByAltText(/Mars Rover/i)).toHaveAttribute('src', 'base64String1');
  expect(screen.getByText(/metadata1/i)).toBeInTheDocument();
});
