import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/src/App.jsx';

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('something on the App component', () => {
  const component = renderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.componentDidMount();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();


})