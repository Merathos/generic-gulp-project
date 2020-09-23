import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (max-width: 1024px) {
    overflow-x: hidden;
  }
`;

export const List = styled.ul`
  display: flex;
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
    width: 2000px;
    overflow-x: scroll;
  }
`;

export const Item = styled.li`
  margin-right: 12px;

  input:checked ~ label {
    background: #53B443;
    color: #fff;
  }

  @media screen and (max-width: 420px) {
    margin-right: 10px;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  padding: 4px 8px;
  background: #F7F8F9;
  font-size: 16px;
  line-height: 21px;
  border-radius: 4px;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 18px;
  }
`;