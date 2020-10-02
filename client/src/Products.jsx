import React from 'react';
import PropTypes from 'prop-types';
import { Price, Title, ProductImage } from './Styles.jsx';

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