import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const ToggleButton = ({ checked, onToggle, ...props }) => {
  return (
    <StyledToggleButton {...props}>
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <span className="slider"></span>
    </StyledToggleButton>
  );
};

ToggleButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const StyledToggleButton = styled.label`
  ${tw`w-12 h-6 bg-white rounded-full flex items-center cursor-pointer`}

  input {
    ${tw`opacity-0 h-0 w-0`}
  }

  .slider {
    ${tw`h-4 w-4 rounded-full bg-violet transition-all duration-500 ease-in-out `}
    transform: translateX(4px);
  }

  &:hover .slider {
    ${tw`bg-light-violet`}
  }

  input:checked + .slider {
    transform: translateX(28px);
  }
`;

export default ToggleButton;
