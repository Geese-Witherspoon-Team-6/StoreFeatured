import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h3`
    color:palevioletred;
  `;

const Products = (props) => {

  return (
    <div>
      <div>
        <img src={props.productDetail.imageUrl}/>
      </div>
      <div>
        <div>
          <Title>
            {props.productDetail.name}
          </Title>
        </div>
        <div>
          {`Price: $${props.productDetail.price}`}
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