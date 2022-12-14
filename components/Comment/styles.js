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

    div {
      margin-right: 0;
      margin-left: 14px;
    }
  }
`;

export const Card = styled.div`
  background: #f7f8f9;
  padding: 40px;
  border-radius: 12px;
  width: 670px;

  @media screen and (max-width: 848px) {
    box-sizing: border-box;
    width: 100%;
  }
`;

export const Img = styled.div`
  margin-right: 14px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 160%;

  b {
    font-weight: bold;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 160%;
  }
`;
