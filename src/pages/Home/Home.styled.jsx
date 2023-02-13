import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1199px) {
    background-position: center;
  }
  @media screen and (min-width: 1200px) {
    background-repeat: no-repeat;
    background-size: 75%;
  }
`;

export const Title = styled.h1`
  margin-top: 7%;
  margin-left: 55%;

  @media screen and (min-width: 320px) {
    margin-top: 70%;
    margin-left: 40%;
    font-size: 32px;
  }
  @media screen and (min-width: 400px) {
    margin-top: 60%;
    margin-left: 40%;
    font-size: 48px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 20%;
    margin-left: 50%;
    font-size: 68px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 7%;
    margin-left: 55%;
    font-size: 90px;
  }
`;

export const TitleFirst = styled.span`
  margin-left: 30px;
`;
export const TitleLast = styled.span`
  margin-left: 80px;
`;
