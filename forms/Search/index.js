import SearchIcon from 'public/icons/search.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterButton } from 'elements';
import { Field, Form, Submit, List, Element, Section } from './styles';

const Search = ({ data }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const filterArray = useSelector(state => state.filter);

  const handleChange = e => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'CATALOG_SEARCH', payload: value });
  }

  return (
    <Section>
      <Form onSubmit={e => handleSubmit(e)}>
        <Field
          name="search"
          placeholder={data}
          type="text"
          value={value}
          onChange={e => handleChange(e)}
        />
        <Submit type="submit" aria-label="Поиск">
          <SearchIcon />
        </Submit>
      </Form>
      <List>
        {filterArray.length !== 0 && (
          filterArray.map((el, i) => (
          <Element key={i}>
              <FilterButton
                name={el}
                handleChange={() =>
                  dispatch({ type: 'CLEAR_FILTER', payload: el })
                }
              />
          </Element>
          )))}
      </List>
    </Section>
  );
};

export default Search;
