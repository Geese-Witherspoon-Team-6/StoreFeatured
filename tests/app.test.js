import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../client/src/App.jsx';
import ProductList from '../client/src/ProductList.jsx';
import Products from '../client/src/Products.jsx';
import Seller from '../client/src/Seller.jsx';
import {cleanup, fireEvent, render} from '@testing-library/react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

// test('something on the App component', () => {
//   const component = renderer.create(
//     <App />,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   tree.componentDidMount();
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

// it('renders Seller component', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Seller />, div);
// })

// const successResult = [
//   {
//     products: [ [Object], [Object], [Object] ],
//     _id: 1,
//     imageUrl: 'https://qtlyimages.s3-us-west-2.amazonaws.com/logoSquare2.png',
//     name: 'Mincing Mockingbird',
//     createdAt: '2020-06-09T18:12:50.773Z',
//     totalSales: 311.29,
//     location: 'Port Adolf',
//     __v: 0
//   }
// ];

// const getSuccess = jest.fn(() => Promise.resolve(successResult));
// // const getFail = jest.fm(() => Promise.reject(new Error()));
// const { getByLabelText, queryByLabelText } = render(<Seller sellerInfo={getSuccess} />);
// const labelBeforeGet = queryByLabelText(/display/i);
// expect(labelBeforeGet).toBeNull();