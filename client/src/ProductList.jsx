import React from 'react';
import Products from './Products.jsx';
import _ from 'lodash';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ProductContainer, ProductMax, ProductBox } from './Styles.jsx'

const ProductList = props => {

  return (
    <div>
      <ProductContainer>
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
      </ProductContainer>
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