import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  @media screen and (max-width: 420px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const List = styled.ul`
  margin-bottom: 25px;
`;