import React from 'react';
import tw, { styled } from 'twin.macro';

import Container from './Container';
import ThemeToggleButton from '../ThemeToggleButton';

import Logo from '../../assets/desktop/logo.svg';
import bgHeaderDesktop from '../../assets/desktop/bg-pattern-header.svg';
import bgHeaderTablet from '../../assets/tablet/bg-pattern-header.svg';
import bgHeaderMobile from '../../assets/mobile/bg-pattern-header.svg';

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Container tw="flex items-center justify-between">
        <img src={Logo} alt="devjobs" />
        <ThemeToggleButton />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  /* Base */
  background-size: cover;

  /* Mobile */
  ${tw`pt-8 pb-24`}
  background-image: url(${bgHeaderMobile});

  /* Tablet */
  @media (min-width: 768px) {
    background-image: url(${bgHeaderTablet});
  }

  /* Desktop */
  @media (min-width: 1024px) {
    background-image: url(${bgHeaderDesktop});
  }
`;

export default Header;
