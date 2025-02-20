import Project from "../../components/Project/Project";
import { projects } from "../../helpers/projectsList";
import { Container, MainTitle, Section } from "../../main.styled";
import { ProjectsList } from "./ProjectsPage.styled";


const ProjectsPage = () => {
  return (
    <Section>
      <Container>
        <MainTitle>Projects</MainTitle>
        <ProjectsList>
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ProjectsList>
      </Container>
    </Section>
  );
};

export default ProjectsPage;
