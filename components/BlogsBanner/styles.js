import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 614px;
  min-height: 391px;
  margin-top: 20px;
  background-color: #f7f8f9;
  padding: 40px 40px 0;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: right bottom;

  @media screen and (max-width: 1360px) {
    min-width: auto;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  @media screen and (max-width: 720px) {
    min-height: 286px;
    padding: 20px 20px 0 40px;
  }

  @media screen and (max-width: 420px) {
    margin-top: 22px;
    padding-right: 0;
  }
`;

export const Ref = styled.a`
  width: 50%;
  margin-bottom: 40px;
  align-self: flex-end;
  font-size: 32px;
  line-height: 140%;
  font-weight: 700;

  @media screen and (max-width: 420px) {
    font-size: 22px;
  }
`;

export const ImageWrapper = styled.div`
  align-self: flex-end;
  max-width: 50%;
`;

export const Image = styled.img`
  @media screen and (max-width: 1360px) {
    box-sizing: border-box;
  }
`;
