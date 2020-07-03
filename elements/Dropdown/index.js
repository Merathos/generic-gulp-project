import styled from 'styled-components';
import { useState } from 'react';
import { Wrapper, Title, List, Item } from './styles';

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

const Dropdown = props => {
  const {
    data: { title, list }
  } = props;
  const [opened, setOpened] = useState(false);

  const openDropdown = () => {
    if (opened) {
      setOpened(false);
    } else {
      setOpened(true);
    }
  };

  return (
    <Wrapper>
      <Title type="button" onClick={() => openDropdown()}>
        {title}
      </Title>
      {opened && (
        <List>
          {list.map((el, i) => (
            <Item>
              <button type="button" onClick={() => console.log(el)}>
                {el}
              </button>
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default Dropdown;
