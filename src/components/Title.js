import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const Title = styled.h1`
  /* Base styles */
  ${tw`font-bold text-very-dark-blue`}

  /* Heading 1 */
  ${({ variant }) => variant === 'h1' && tw`text-5xl`}

  /* Heading 2 */
  ${({ variant }) => variant === 'h2' && tw`text-4xl`}

  /* Heading 3 */
  ${({ variant }) => variant === 'h3' && tw`text-3xl`}

  /* Heading 4 */
  ${({ variant }) => variant === 'h4' && tw`text-2xl`}
`;

Title.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Title;
