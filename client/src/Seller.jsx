import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

moment().format();

const Logo = styled.img`
  border-radius: 10px;
  max-width: 150px;
`;

const Seller = (props) => {

    return (
      <div>
        <div>
          <Logo src={props.sellerInfo.imageUrl} />
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

Seller.propTypes = {
  sellerInfo: PropTypes.object,
};
Seller.defaultProps = {
  sellerInfo: null,
};

export default Seller;

