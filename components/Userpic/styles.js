import styled from 'styled-components';

export const Block = styled.div`
  font-weight: bold;
  font-size: 34px;
  line-height: 120%;
  display: flex;
  padding: 35px 0 60px 50px;

  @media screen and (max-width: 420px) {
    font-size: 22px;
    padding: 30px 0 45px 50px;
    line-height: 120%;
  }
`;

export const Img = styled.img`
  width: 67px;
  margin-right: 20px;
  border-radius: 50%;
`;