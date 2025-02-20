import { NavLink } from 'react-router';
import { ProjectLink, ProjectLinkImg, ProjectLinkTitle } from './Project.styled';
import PropTypes from 'prop-types';

const Project = ({ title, img, index }) => {
	
    return (
		<NavLink to={`/project/${index}`}>
			<ProjectLink >
				<ProjectLinkImg src={img} alt={title}  />
				<ProjectLinkTitle >{title}</ProjectLinkTitle>
			</ProjectLink>
		</NavLink>
	);
};

Project.propTypes = {
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
  };

export default Project
