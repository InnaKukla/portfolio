import styled from "styled-components";

export const ProjectDetailsWrapper = styled.div`
  margin: 0 auto;
  max-width: 865px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const ProjectDetailsCover = styled.img`
  max-width: 100%;
  margin-bottom: 40px;

  box-shadow: var(--box-shadow);
  border-radius: 10px;
`;

export const ProjectDetailsSkills = styled.div`
  margin-bottom: 30px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;

  @media screen and (max-width: 620px) {
    margin-bottom: 20px;
    font-size: 22px;
}
`;
