import React from 'react';

function Products(props) {
  return (
    <div className="prod-square">
      <div className="prod-img">
        product image
      </div>
      <div className="prod-text">
        <div className="prod-title">
          product title
        </div>
        <div className="prod-price">
          product price
        </div>
      </div>
    </div>
  )
}

export default Products;