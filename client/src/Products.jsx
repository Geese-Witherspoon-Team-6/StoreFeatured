import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Price = styled.p`
    color:black;
    margin: 1px;
    padding: 1px;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  `;

const Title = styled.p`
  color:black;
  margin: 1px;
  padding: 1px;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
`;

const ProductImage = styled.img`
  padding: 9px;
  margin: 1px;
  height: auto;
  max-width: 150px;
  background-color: white;
`;

const Products = (props) => {

  return (
    <div>
      <div>
        <ProductImage src={props.productDetail.imageUrl}/>
      </div>
      <div>
        <div>
          <Title>
            {props.productDetail.name}
          </Title>
        </div>
        <div>
          <Price>
            {`$${props.productDetail.price}`}
          </Price>
        </div>
      </div>
    </div>
  )
};

Products.propTypes = {
  productDetail: PropTypes.object,
};
Products.defaultProps = {
  productDetail: null,
};

export default Products;