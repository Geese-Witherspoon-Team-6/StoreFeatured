import React from 'react';
import styled from 'styled-components';

function Products(props) {
  const Title = styled.h3`
    color:palevioletred;
  `;
  return (
    <div className="prod-square">
      <div className="prod-img">
        <img src={props.productDetail.imageUrl}/>
      </div>
      <div className="prod-text">
        <div className="prod-title">
          <Title>
            {props.productDetail.name}
          </Title>
        </div>
        <div className="prod-price">
          {`Price: $${props.productDetail.price}`}
        </div>
      </div>
    </div>
  )
}

export default Products;