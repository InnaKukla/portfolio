import styled from "styled-components";
import {
  ProjectLink,
  ProjectLinkImg,
  ProjectLinkTitle,
} from "../../components/Project/Project.styled";
import { NavLink } from "react-router";

export const HomeProjectLinkWrapper = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 15px;
  &:hover {
    gap: 20px;
    li {
      max-width: 180px;
    }
    img {
      width: 180px;
    }
  }
  @media (max-width: 620px) {
  }
`;

export const HomeProjectLink = styled(ProjectLink)`
  list-style: none;
  max-width: 170px;

  @media (max-width: 620px) {
  }
`;

export const HomeProjectLinkImg = styled(ProjectLinkImg)`
  width: 170px;
  height: 150px;

  @media (max-width: 620px) {
  }
`;

export const HomeProjectLinkTitle = styled(ProjectLinkTitle)`
  font-size: 16px;
  padding: 4px 18px 7px;
`;
