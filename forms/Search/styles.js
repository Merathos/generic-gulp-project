import styled from 'styled-components';

export const Block = styled.div`
  border-bottom: 1px solid #201F2A;
  display: flex;
  padding: 25px 0;
  margin-bottom: 10px;

  @media screen and (max-width: 420px) {
    padding: 16px 0;
  }
`;

export const Field = styled.input`
  width: 100%;
  border: none;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  opacity: 0.5;
  font-family: inherit;
  outline: none;

  &:hover,
  &:active {
    opacity: 1;
    color: #201F2A;
  }

  &:focus ~ button {
    background: #FB5235;

    svg path {
      stroke: #fff;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 134%;
  }
`;

export const Submit = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-left: 10px;
  
  &:active {
    background: #EC381A;

    svg path {
      stroke: #fff;
    }
  }

  /* @media screen and (max-width: 420px) {
    margin-left: 4px;
  } */
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 32px;
`;

export const Element = styled.li`
  margin-right: 22px;
`;

export const Section = styled.section`
  margin-bottom: 85px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;