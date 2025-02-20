import { NavLink } from "react-router";
import Header from "../../components/Header/Header";
// import ProjectsImg from "../../img/projects.png";
import { projects } from "../../helpers/projectsList";
import { HomeProjectLink, HomeProjectLinkImg, HomeProjectLinkTitle, HomeProjectLinkWrapper } from "./HomePage.styled";

// import {
//   Section,
//   Container,
//   Title,
//   ContentList,
//   ContentListItem,
// } from "../../main.styled";

const HomePage = () => {
  return (
    <div style={{ display: "flex",  backgroundColor: 'var(--header-bg)' }}>
      <Header />
      
      <div style={{ margin: "auto", cursor: 'pointer', maxWidth: '50%'}}>
      <HomeProjectLinkWrapper to={`/projects`} >
      {projects.map((project, index) => {
            return (
              <HomeProjectLink key={index}>
                 <HomeProjectLinkImg src={project.img} alt="img" width={250} height={200} />
                 <HomeProjectLinkTitle>{project.title}</HomeProjectLinkTitle>
              </HomeProjectLink>)})}
       {/* <img src={ProjectsImg} alt="projects" width={700} height={500} /> */}
        </HomeProjectLinkWrapper>
      </div>
      
    </div>

    // <Section>
    //   <Container>
    //     <ContentList>
    //       <ContentListItem>
    //         <Title>Frontend</Title>
    //         <p>
    //           JavaScript, ReactJS, ViteReactJS, HTML, CSS, NPM, MaterialUI,
    //           StyledComponents, WebFlow, Axios, EmailJS, REST API, Hooks,
    //           Routers, Redux, Redux Toolkit
    //         </p>
    //       </ContentListItem>
    //       <ContentListItem>
    //         <Title>Backend</Title>
    //         <p>NodeJS, MongoDB</p>
    //       </ContentListItem>
    //     </ContentList>
    //   </Container>
    // </Section>
  );
};

export default HomePage;
