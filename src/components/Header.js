import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const click = () => {
    console.log('Click');
  };
  return (
    <header>
      <h1>{title}</h1>
      <Button text="Add" />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
