import React from 'react';
import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';

const Input = ({
  type,
  label,
  name,
  value,
  onChange,
  required,
  icon,
  className,
  onFocus,
  onBlur,
}) => {
  return (
    <StyledInput className={className}>
      {icon && icon}
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {!value && <label htmlFor={name}>{label}</label>}
    </StyledInput>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node,
};

const StyledInput = styled.div`
  ${tw`relative flex`}

  input {
    ${tw`py-8 pl-20 pr-12 w-full bg-transparent font-sans text-midnight dark:text-white focus:(outline-none)`}
  }

  label {
    ${tw`absolute text-dark-gray pointer-events-none text-base`}
    top: 50%;
    transform: translate(80px, -50%);
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translate(32px, -50%);
  }
`;

export default Input;
