import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SellerStyle2, Logo, SellerName, Stats, StatsHolder} from './Styles.jsx'

moment().format();

const Seller = (props) => {

    return (
      <div>
        <SellerStyle2>
          <div>
            <Logo src={props.seller.imageUrl} />
          </div>
          <div>
            <SellerName>{props.seller.name}</SellerName>
          </div>
          <StatsHolder>
            <div>
              <Stats>{`${props.seller.totalSales}`}</Stats>
            </div>
            <div>
              <Stats>{`${moment(props.seller.createdAt).fromNow()}`}</Stats>
            </div>
          </StatsHolder>
          <div>
            <Stats>{`${props.seller.location}`}</Stats>
          </div>
        </SellerStyle2>
      </div>
    )
};

Seller.propTypes = {
  seller: PropTypes.object,
};
Seller.defaultProps = {
  seller: null,
};

export default Seller;

