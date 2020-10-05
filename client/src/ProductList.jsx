import React from 'react';
import Products from './Products.jsx';
import _ from 'lodash';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductBox = styled.section`
  padding: 4px;
  margin: 4px;
  border: 1px solid orange;
`;

const ProductContainer = styled.section`
  padding: 4px;
  margin: 4px;
  border: 1px solid gray;
  width: 65%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
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