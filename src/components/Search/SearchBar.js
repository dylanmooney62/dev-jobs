import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';
import Input from '../shared/Input';

import { ReactComponent as SearchIcon } from '../../assets/desktop/icon-search.svg';
import { ReactComponent as LocationIcon } from '../../assets/desktop/icon-location.svg';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [focus, setFocus] = useState(false);

  // TODO: create hook based on this logic
  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <StyledSearchBar focus={focus}>
      <div tw="flex-1">
        <Input
          type="text"
          name="search"
          label="Filter by title, company, expertise..."
          value={search}
          icon={<SearchIcon />}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div tw="flex-1">
        <Input
          type="text"
          name="location"
          label="Filter by location..."
          value={location}
          icon={<LocationIcon />}
          onChange={(e) => setLocation(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.form`
  /* Base */
  ${tw`flex bg-white rounded-lg shadow-sm w-full dark:(bg-very-dark-blue) transition-colors duration-500`}

  /* Focus */
  ${({ focus }) =>
    focus &&
    tw`
    ring ring-light-violet
  `}
`;

export default SearchBar;
