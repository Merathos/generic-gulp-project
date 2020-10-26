import { useState } from 'react';
import SearchIcon from 'public/icons/search.svg';
import { Field, Block, Submit } from './styles';

const Search = props => {
  const { placeholder, handleSearch, initialValue, isMain = false } = props;
  const [value, setValue] = useState(initialValue || '');

  return (
    <Block isMain={isMain}>
      <Field
        name="search"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        isMain={isMain}
      />
      <Submit
        type="button"
        aria-label="Поиск"
        disabled={!value}
        onClick={() => handleSearch(value)}
        isMain={isMain}
      >
        <SearchIcon />
      </Submit>
    </Block>
  );
};

export default Search;
