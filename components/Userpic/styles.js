import styled from 'styled-components';

export const Block = styled.div`
  font-weight: 700;
  font-size: 34px;
  line-height: 120%;
  display: flex;
  align-items: center;
  padding: 35px 0 60px 50px;

  @media screen and (max-width: 420px) {
    font-size: 22px;
    padding: 30px 0 45px 50px;
    line-height: 120%;
  }
`;

export const Img = styled.div`
  width: 67px;
  height: 67px;
  min-width: 67px;
  min-height: 67px;
  margin-right: 20px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-size: cover;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 53px;
    height: 53px;
    left: -25px;
    top: -10px;
    background: #f7f7fa;
    transform: rotate(-30deg);
    z-index: -1;
  }
`;

export const Text = styled.p`
  margin-top: 4px;
  font-size: 16px;
  line-height: 21px;
  opacity: 0.5;
  font-weight: 500;

  @media screen and (max-width: 420px) {
    margin-top: 1px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Crop = styled.div`
  width: 67px;
  height: 67px;
  overflow: hidden;
`;
