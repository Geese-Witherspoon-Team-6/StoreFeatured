import React from 'react';
import Products from './Products.jsx';
import _ from 'lodash';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductContainer = styled.section`
  padding: 4px;
  margin: 4px;
  width: 97%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
`;

const ProductBox = styled.section`
  padding: 4px;
  margin: 4px;
  max-height: 265px;
`;

const ProductList = props => {

  return (
    <div>
      <ProductContainer>
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