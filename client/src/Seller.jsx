import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  SellerStyle, Logo, SellerName, StatsHolder, Sales, Year, SalesText, YearText, LocationText, Location, Company, MoreT, MoreB, ArrowMore, MoreItems
} from './Styles.jsx'

moment().format();

const Seller = (props) => {


    return (
      <div>
        <SellerStyle>
          <Company>

            <Logo src={props.seller.imageUrl} />
            <MoreT>More from</MoreT>
            <SellerName>{props.seller.name}</SellerName>
            <MoreItems>
              <MoreB>{`See all 465 items`}</MoreB><ArrowMore size="13"/>
            </MoreItems>
          </Company>

          <StatsHolder>

              <SalesText>Sales</SalesText>
              <Sales>{props.seller.totalSales}</Sales>
              <YearText>On Qtsy Since</YearText>
              <Year>{`${moment(props.seller.createdAt).year()}`}</Year>
              <LocationText>Based in</LocationText>
              <Location>{`${props.seller.location}`}</Location>

          </StatsHolder>

        </SellerStyle>
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

