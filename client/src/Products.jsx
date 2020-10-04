import React from 'react';
import PropTypes from 'prop-types';
import { Price, Title, ProductImage, ProdImageHolder } from './Styles.jsx';

const Products = (props) => {

  return (
    <div>
      <div>
        <ProdImageHolder>
          <ProductImage src={props.productDetail.imageUrl}/>
        </ProdImageHolder>
      </div>
      <div>
        <div>
          <Title>
            {`${props.productDetail.name.slice(0, 28)}...`}
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