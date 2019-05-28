import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Notable', sans-serif;
  }
`;

export const Wrapper = styled.section`
  border: solid;
  border-width: 1px;
  border-color: #D0D0D0
  width: 30%;
  color: #484848;
`;

export const Price = styled.section`
  margin-left: 8%;
  padding-top: 20px;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  margin-right: 2px;
`;

export const PerNight = styled.section`
  display: inline-block;
  font-size: 12px;
`;

export const Reviews = styled.section`
  margin-left: 8%;
  font-size: 12px;
  padding-top: 2px;
`;

export const DatesHeader = styled.section`
  margin-left: 8%;
  font-size: 12px;
  padding-top: 10px;
  font-weight: semi-bold;
`;

export const Dates = styled.section`
  border: solid;
  border-width: 1px;
  border-color: #D0D0D0
  text-align: center;
  margin-left: 8%;
  margin-right: 8%;
  padding: 8px;
`;

export const CheckIn = styled.section`
  display: inline-block;
  color: gray;
  font-size: 17px;
  font-weight: lighter;
  text-align: left;
  padding: 5px 50px 5px 5px;
  border-radius: 5px;
`;

export const CheckOut = styled.section`
  text-align: right;
  display: inline-block;
  color: gray;
  font-size: 17px;
  font-weight: lighter;
  padding: 5px 50px 5px 5px;
  border-radius: 5px;
`;

export const Arrow = styled.section`
  text-align: center;
  display: inline-block;
  padding-left: 12px;
  padding-right: 10px;

`;

export const GuestHeader = styled.section`
  margin-left: 8%;
  font-size: 12px;
  padding-top: 10px;
  font-weight: 400;
`;

export const GuestWrapper = styled.section`
  border: solid;
  border-width: 1px;
  border-color: #D0D0D0
  margin-left: 8%;
  margin-right: 8%;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const Book = styled.section`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
`;

export const Button = styled.section`
  margin-left: 2%;
  margin-right: 2%;
  border: solid;
  color: white;
  padding: 15px 50px 15px 50px;
  background-color: #fc534e;
  border-radius: 7px;
  font-size: 16px;
`;

export const ChargedYet = styled.section`
  text-align: center;
  font-size: 13px;
  margin-top: -20px;
  font-weight: 500;
`;

export const Bar = styled.section`
  border: solid;
  border-width: .25px;
  border-color: #D0D0D0
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Bar2 = styled.section`
  border: solid;
  border-width: .5px;
  border-color: #D0D0D0
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 10px;
`;

export const Bar3 = styled.section`
  border: solid;
  border-width: .5px;
  border-color: #D0D0D0
  margin-top: 10px;
  margin-left: 3%;
  margin-right: 3%;
`;

export const Footer1 = styled.section`
  margin-top: 20px;
  margin-left: 8%;
  font-weight: bold;
  font-size: 14px;
  margin-right: 30%;
`;

export const Footer2 = styled.section`
  margin-top: 5px;
  font-size: 14px;
  margin-left: 8%;
  margin-bottom: 20px;
  margin-right: 20%;
`;

export const LightBulb = styled.section`
  float: right; 
  width: 20%;
  margin-bottom: 50px;
  height: 100%;
  padding-top: 28px;
`;

export const TotalPrice = styled.section`
  text-align: left;
  margin-left: 10px;
  margin-top: -10px;
  font-size: 14px;
  font-weight: lighter;
  display: inline-block;
  margin-right: 210px;
`;

export const ServiceFee = styled.section`
  text-align: left;
  margin-left: 8px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: lighter;
  display: inline-block;
  margin-right: 220px;
`;

export const OccupancyFeeAndTaxes = styled.section`  
  text-align: left;
  margin-left: 8px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: lighter;
  display: inline-block;
  margin-right: 132px;
`;

export const Fee1 = styled.section`
  text-align: right;
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: lighter;
`;

export const Fee2 = styled.section`
  text-align: right;
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: lighter;
  font-size: 14px;
  font-weight: lighter;
`;

export const Fee3 = styled.section`
  text-align: right;
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: lighter;
`;

export const Total = styled.section`
  text-align: left;
  padding-bottom: 10px;
  margin-left: 10px;
  margin-top: 7px;
  font-size: 14px;
  padding-bottom: 20px;
  display: inline-block;
  margin-right: 250px;
  font-weight: bolder;
`;

export const Fee4 = styled.section`
  text-align: right;
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: bolder;
  display: inline-block;
`;
