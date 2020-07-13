import styled from 'styled-components';
import Subtitle from 'elements/Subtitle';
import { Field, Form, Submit } from './styles';
import SearchIcon from 'public/icons/search.svg';
import { useState } from 'react';

// const ArticleTitle = styled.h1`
//   font-size: 84px;
//   line-height: 86px;
//   margin-bottom: 50px;
//   padding-top: 200px;

//   @media screen and (max-width: 420px) {
//     font-size: 32px;
//     line-height: 31px;
//     margin-bottom: 50px;
//     padding-top: 110px;
//   }
// `;

// const Date = styled(Subtitle)`
//   margin-bottom: 80px;

//   @media screen and (max-width: 420px) {
//     margin-bottom: 40px ;
//   }
// `;

// const Description = styled.p`
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 158%;
//   max-width: 854px;
//   margin-bottom: 160px;

//   @media screen and (max-width: 420px) {
//     margin-bottom: 80px;
//     font-size: 16px;
//     line-height: 158%;
//   }
// `;

const Search = ({ data }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('поиск: ' + value);
    setSubmitted(submitted.push(value));
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
