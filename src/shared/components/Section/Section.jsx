import PropTypes from 'prop-types';
import { ManeSection, Title } from './Section.styled.js';

function Section({ title, children }) {
  return (
    <ManeSection>
      {title && <Title>{title}</Title>}
      {children}
    </ManeSection>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
