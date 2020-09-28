import React from 'react';
import Products from './Products.jsx';
import _ from 'lodash';

function ProductList(props) {
  return (
    <div id="productBox">
      <div id="product">
        <Products />
      </div>
    </div>

  )
}

export default ProductList;