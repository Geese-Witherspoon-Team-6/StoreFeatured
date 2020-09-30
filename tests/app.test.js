import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import sample from './sample.js';
import axios from 'axios';
import { fetchData } from './app.jsx';
import Products from '../client/src/Products.jsx';
import Seller from '../client/src/Seller.jsx';

describe('jest framework is functional', () => {
  test('jest is working', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('components render with props', () => {
  it('renders Seller component with sample data passed in as props', () => {
    act(() => {
      render(<Seller seller={sample.sellerObject}/>, container);
    });
    expect(container.textContent).toBe(sample.sellerText);

    act(() => {
      let sellerObject2 = sample.sellerObject;
      sellerObject2.location = 'Nebraska';
      render(<Seller seller={sellerObject2} />, container);
    });
    expect(container.textContent).toBe(sample.sellerText2);
  });

  it('renders Product component with sample data passed in as props', () => {
    act(() => {
      render(<Products productDetail={sample.productInfo} />, container);
    });
    let productText = 'FishPrice: $973.21'
    expect(container.textContent).toBe(productText);
  });
});

jest.mock('axios');

describe('fetches data via axios', () => {
  it('fetches successfully data from an API', async () => {
    const data = sample.fakeSeller;

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData()).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchData()).rejects.toThrow(errorMessage);
  });
});