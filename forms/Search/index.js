import { useState } from 'react';
import SearchIcon from 'public/icons/search.svg';
import { Field, Form, Submit } from './styles';

const Search = (props) => {
  const {
    placeholder,
    handleSearch,
    resetSearch,
    initialValue,
    isMain = false,
    smallPadding = false,
  } = props;
  const [value, setValue] = useState(initialValue || '');

  return (
    <Form
      isMain={isMain}
      smallPadding={smallPadding}
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSearch(value);
      }}
    >
      <Field
        name="search"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => {
          if (e.target.value === '') {
            resetSearch();
          }
          setValue(e.target.value);
        }}
        isMain={isMain}
      />
      <Submit
        type="submit"
        aria-label="Поиск"
        disabled={!value}
        isMain={isMain}
      >
        <SearchIcon />
      </Submit>
    </Form>
  );
};

export default Search;
