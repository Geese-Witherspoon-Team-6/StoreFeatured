import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    color:palevioletred;
  `;

function Products(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });



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
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Products;