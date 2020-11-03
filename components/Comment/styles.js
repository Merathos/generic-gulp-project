import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 24px;

  &:nth-child(even) {
    align-items: flex-end;

    & > div {
      flex-direction: row-reverse;
    }

    img {
      margin-right: 0;
      margin-left: 14px;
    }
  }
`;

export const Card = styled.div`
  background: #F7F8F9;
  padding: 40px;
  border-radius: 12px;
  width: 670px;
  
  @media screen and (max-width: 420px) {
    min-width: 100%;
    box-sizing: border-box;
  }
`;

export const Img = styled.img`
  width: 49px;
  margin-right: 14px;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 160%;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 160%;
  }
 `;