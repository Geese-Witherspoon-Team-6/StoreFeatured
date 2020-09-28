import React from 'react';

function Products(props) {
  return (
    <div className="prod-square">
      <div className="prod-img">
        <img src={props.productDetail.imageUrl}/>
      </div>
      <div className="prod-text">
        <div className="prod-title">
          <h3>{props.productDetail.name}</h3>
        </div>
        <div className="prod-price">
          {`Price: $${props.productDetail.price}`}
        </div>
      </div>
    </div>
  )
}

export default Products;