import styled from 'styled-components';
import Subtitle from 'elements/Subtitle';
import { Field, Form, Submit } from './styles';
import SearchIcon from 'public/icons/search.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux'

const Search = ({ data }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'CATALOG_SEARCH', payload: value });
  }

  return (
    <>
    <Form onSubmit={e => handleSubmit(e)}>
      <Field
        name="search"
        placeholder={data}
        type="search"
        value={value}
        onChange={e => handleChange(e)}
      />
      <Submit type="submit" aria-label="Поиск">
        <SearchIcon />
      </Submit>
    </Form>
    </>
  );
};

export default Search;
