import { useParams } from "react-router";
import BtnGitHub from "../../components/Buttons/BtnGitHub";
import { projects } from "../../helpers/projectsList";

import { Container, MainTitle, Section } from "../../main.styled";
import { ProjectDetailsCover, ProjectDetailsSkills, ProjectDetailsWrapper } from "./ProjectPage.styled";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <>
      <Section>
        <Container>
          <ProjectDetailsWrapper>
            <MainTitle >{project.title}</MainTitle>

            <ProjectDetailsCover
              src={project.imgBig}
              alt={project.title}
            />

            <ProjectDetailsSkills >
              <p>Skills: {project.skills}</p>
            </ProjectDetailsSkills>

            {project.gitHubLink && <BtnGitHub link="https://github.com" />}
          </ProjectDetailsWrapper>
        </Container>
      </Section>
    </>
  );
};

export default ProjectPage;
