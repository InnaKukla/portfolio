import styled from "styled-components";
import HeaderBG from '../../img/header-bg.png'


export const HeaderContainer = styled.header`
  padding: 60px 0 0;
  /* /* min-height: 695px; */
  min-height: 100vh; 
width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--header-bg);
  
  background-image: url(${HeaderBG});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;

  color: var(--header-text);
  text-align: center;
  @media (max-width: 620px) {
    min-height: unset;
  }
`;

export const HeaderWrapper = styled.div`
  padding: 0 15px;
  max-width: 660px;
`;

export const HeaderTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;
  font-family: 'Bogart', sans-serif;
                                                

  @media (max-width: 620px) {
    font-size: 30px;
  }
`;

export const HeaderTitleMainText = styled.strong`
  font-size: 70px;
  font-weight: 700;
  @media (max-width: 620px) {
    font-size: 40px;
  }
`;

export const HeaderTitleHighlightText = styled.span`
  font-style: normal;
  color: var(--accent);
`;
export const HeaderTextWrapper = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 1.333;
  p {
    margin-top: 0.5em;
    font-size: 18px;
    line-height: 1.333;
  }
`;
