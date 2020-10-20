import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterButton } from 'elements';
import SearchIcon from 'public/icons/search.svg';
import { Field, Block, Submit, List, Element, Section } from './styles';

const Search = props => {
  const { placeholder, handleSearch } = props;
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const filterArray = useSelector(state => state.filter);

  const handleSearchSubmit = e => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <Section>
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
          onClick={e => handleSearchSubmit(e)}
        >
          <SearchIcon />
        </Submit>
      </Block>
      <List>
        {filterArray.length !== 0 && (
          filterArray.map((el, i) => (
          <Element key={i}>
              <FilterButton
                name={el}
                handleChange={() =>
                  dispatch({ type: 'CLEAR_FILTER', payload: el })}
              />
          </Element>
        )))}
      </List>
    </Section>
  );
};

export default Search;
