import { useState } from 'react';
import SearchIcon from 'public/icons/search.svg';
import { Field, Block, Submit } from './styles';

const Search = props => {
  const { placeholder, handleSearch } = props;
  const [value, setValue] = useState('');

  return (
    <Block>
      <Field
        name="search"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Submit
        type="button"
        aria-label="Поиск"
        disabled={!value}
        onClick={() => handleSearch(value)}
      >
        <SearchIcon />
      </Submit>
    </Block>
  );
};

export default Search;
