import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;

export const EmojiContainer = styled.div`
  width: 57px;
  height: 57px;
  background-color: #f7f8f9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 43px;
    height: 43px;
  }
  margin-bottom: 15px;
`;

export const Emoji = styled.img`
  user-select: none;
  width: 20px;
  height: 20px;
`;
