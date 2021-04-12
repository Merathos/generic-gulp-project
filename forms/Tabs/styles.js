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

  @media screen and (max-width: 420px) {
    margin-right: 10px;
  }
`;

export const Label = styled.a`
  padding: 4px 8px;
  background: ${(props) => (props.activeLink ? '#53B443' : '#F7F8F9')};
  color: ${(props) => (props.activeLink ? '#fff' : 'inherit')};
  font-size: 16px;
  line-height: 21px;
  border-radius: 4px;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
