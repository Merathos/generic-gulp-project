import styled from 'styled-components';

export const Wrapper = styled.a`
  display: flex;
  flex-flow: row wrap;
  background-color: #f7f8f9;
  padding: 40px 40px 0;
  width: 100%;
  box-sizing: border-box;
  min-height: 431px;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-position: bottom right;

  @media (max-width: 834px) {
    background-image: url(${props => props.bgMob});
    background-position: bottom right;
  }

  @media (max-width: 768px) {
    padding: 30px 30px 0;
    max-width: 315px;
    min-height: 389px;
  }
`;

export const Content = styled.div`
  margin-top: auto;
  margin-bottom: 40px;
  max-width: 348px;

  @media (max-width: 834px) {
    margin-bottom: 0;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 18px;
  line-height: 27px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Title = styled.b`
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 32px;
  line-height: 38px;
  font-weight: 700;

  img {
    display: inline-block;
    width: 32px;
    height: auto;
    margin-left: 11px;

    @media (max-width: 768px) {
      width: 22px;
      margin-left: 8px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 22px;
    line-height: 26px;
  }
`;

export const Picture = styled.img`
  display: block;
  margin-top: auto;
  margin-left: auto;
  margin-right: 62px;
  max-height: 378px;
  width: auto;

  @media (max-width: 834px) {
    max-height: 237px;
    margin-right: -13px;
  }
`;
