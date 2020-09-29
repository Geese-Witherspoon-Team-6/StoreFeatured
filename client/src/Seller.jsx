import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

moment().format();

function Seller(props) {


    return (
      <div>
        <div>
          <img src={props.sellerInfo.imageUrl}/>
        </div>
        <div className="sell-title">
          <h3>{props.sellerInfo.name}</h3>
        </div>
        <div className="sell-stats">
          <div className="sell-sales">
            <p>{`Total Sales: $${props.sellerInfo.totalSales}`}</p>
          </div>
          <div className="sell-year">
            <p>{`Joined: ${moment(props.sellerInfo.createdAt).fromNow()}`}</p>
          </div>
        </div>
        <div className="sell-location">
          <p>{`Location: ${props.sellerInfo.location}`}</p>
        </div>
      </div>
    )
};

export default Seller;

