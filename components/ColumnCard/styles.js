import styled from 'styled-components';

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    max-width: 315px;
  }
`;

export const Content = styled.div`
  margin-top: auto;
  margin-bottom: 40px;
  max-width: 348px;
`;

export const Date = styled.p`
  font-size: 16px;
  line-height: 21px;
  opacity: 0.5;
  margin-bottom: 8px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 1px;
  }
`;

export const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 18px;
  line-height: 27px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Title = styled.b`
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 7px;
  }
`;

export const Picture = styled.img`
  display: block;
  width: 100%;
  max-height: 192px;
  object-fit: cover;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    max-height: 235px;
    margin-bottom: 22px;
  }
`;

export const Type = styled.p`
  position: relative;
  margin-top: 40px;
  padding-left: 17px;
  color: #53b443;
  font-size: 16px;
  line-height: 21px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 21px;
    padding-left: 12px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #53b443;
    transform: translateY(-50%);

    @media screen and (max-width: 767px) {
      width: 6px;
      height: 6px;
    }
  }
`;
