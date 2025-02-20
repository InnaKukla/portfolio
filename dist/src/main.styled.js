import styled from "styled-components";


export const ContainerApp = styled.div`
 min-height: 100vh;
  display: flex;
  flex-direction: column;
  
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
  
`;

export const Section = styled.section`
  padding: 70px 0;


  @media screen and (max-width: 620px) {
    padding: 40px 0;
  }
`;

export const MainTitle = styled.h2`
  margin-bottom: 60px;

  font-size: 60px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--main-title);
  text-align: center;

  @media screen and (max-width: 620px) {
    margin-bottom: 30px;
    font-size: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-size: 25px;
  font-weight: 700;
  line-height: 1.3;

  @media screen and (max-width: 620px) {
    margin-bottom: 10px;
    font-size: 30px;
  }
`;

export const ContentList = styled.ul`
 margin: 0 auto;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  text-align: center;

  a {
    color: var(--accent);
}

  @media screen and (max-width: 620px) {
    row-gap: 20px;
  }
`;

export const ContentListItem = styled.li`
  font-size: 18px;
  line-height: 1.5;

  p{
  margin-top: 0.5em;
}
  @media screen and (max-width: 620px) {
    font-size: 16px;
  }
`