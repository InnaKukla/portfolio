import gitHubIcon from '../../img/icons/gitHub-black.svg';
import PropTypes from 'prop-types';
import { BtnOutline } from './Buttons.styled';

const BtnGitHub = ({ link }) => {
    return (
		<BtnOutline href={link} target="_blank" rel="noreferrer">
			<img src={gitHubIcon} alt="gitHubIcon" />
			GitHub repo
		</BtnOutline>
	);
}

BtnGitHub.propTypes = {
	link: PropTypes.string.isRequired,
  };

export default BtnGitHub
