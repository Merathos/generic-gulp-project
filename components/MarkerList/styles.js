import styled from 'styled-components';

export const Img = styled.img`
  margin-bottom: 40px;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

export const ElementEllipse = styled.li`
  padding-left: 70px;
  position: relative;
  margin-bottom: 30px;

  &::before {
    content: '';
    position: absolute;
    border: 2px solid #2F8ED9;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    left: 30px;
    top: 10px;
  }

  @media screen and (max-width: 420px) {
    padding-left: 25px;
    margin-bottom: 20px;

    &::before {
      left: 0;
    }
  }
`;

export const ElementNumber = styled.li`
  padding-left: 30px;
  position: relative;
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

export const Number = styled.span`
  color: #2F8ED9;
  margin-right: 20px;
  font-size: 18px;
  line-height: 32px;

  @media screen and (max-width: 420px) {
    margin-right: 10px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 158%;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 158%;
  }
`;
