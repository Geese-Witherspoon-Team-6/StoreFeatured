import React from 'react';
import Products from './Products.jsx';
import _ from 'lodash';

function ProductList(props) {
  return (
    <div id="productBox">
      {
        _.map(props.products, (product) => {
          console.log(product)
          return (
            <div id="product">
              <Products productDetail={product}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductList;