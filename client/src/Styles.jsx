import styled from 'styled-components';

  /* App.jsx */
export const Main = styled.section`
  padding: 10px;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(53, 53, 99);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
`;

export const Background = styled.section`
  height: 50px;
  width: 99.2%;
  max-width: 1321px;
  background: url(https://qtsy-cropped.s3-us-west-2.amazonaws.com/qtsy_background.png) no-repeat center;
`;

export const Container = styled.section`
  padding: 4px;
  margin: 4px;
  margin-top: 0px !important;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 555px;
  background-color: #f8ebe6;
`;

export const SellerStyle = styled.section`
  padding: 4px;
  margin: 4px;
  width: 40%;

  color: palevioletred;
`;

/* Seller.jsx */
export const SellerStyle2 = styled.section`
  color: black;
  margin: 4px;
  padding: 4px;
  font-family: 'Martel', serif;
`;

export const Logo = styled.img`
  border-radius: 10px;
  max-width: 150px;
`;

export const SellerName = styled.p`
  color: black;
  font-size: 28px
`;

export const Stats = styled.p`
  font-size: 23px
`;

export const StatsHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  margin: 4px;
  padding: 4px;
`;


/* ProductList.jsx */
export const ProductContainer = styled.section`
  padding: 4px;
  margin: 4px;
  width: 97%;

`;

export const ProductMax = styled.section`
  max-width: 950px;
  padding: 4px;
  margin: 4px;
  width: 97%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
`;

export const ProductBox = styled.section`
  padding: 4px;
  margin: 4px;
  max-height: 265px;
`;

/* Products.jsx */
export const Price = styled.p`
  color:black;
  margin: 1px;
  padding: 1px;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
`;

export const Title = styled.p`
  color:black;
  margin: 1px;
  padding: 1px;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
`;

export const ProductImage = styled.img`
  padding: 9px;
  margin: 1px;
  height: auto;
  max-width: 150px;
  background-color: white;
`;
