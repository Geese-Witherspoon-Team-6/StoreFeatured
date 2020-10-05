import React from 'react';
import Products from './Products.jsx';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { ProductMax, ProductBox } from './Styles.jsx'

const ProductList = props => {

  return (
    <div>
        <ProductMax>
          {
            _.map(props.products, (product) => {
              return (
                <div key={product.sellerId}>
                  <ProductBox>
                    <Products productDetail={product}/>
                  </ProductBox>
                </div>
              )
            })
          }
        </ProductMax>
    </div>
  )
};

ProductList.propTypes = {
  products: PropTypes.array,
};
ProductList.defaultProps = {
  products: null,
};

export default ProductList;