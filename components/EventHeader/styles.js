import styled from 'styled-components';
import { TitleH1, Btn, Container } from 'elements';

export const GreyHeader = styled.section`
  margin-bottom: 160px;
  background-color: #f7f8f9;
  padding-top: 200px;

  @media screen and (max-width: 767px) {
    padding-top: 110px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }
`;

export const StyledContainer = styled(Container)`
  padding-bottom: 170px;
  background-image: url(${(props) => props.bgImg});
  background-position: bottom right;
  background-repeat: no-repeat;

  @media screen and (max-width: 1360px) {
    padding-bottom: 130px;
  }

  @media screen and (max-width: 767px) {
    background-image: none;
    padding-bottom: 80px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const TopWrapper = styled.div`
  margin-right: auto;
  max-width: 600px;
  height: max-content;
`;

export const Status = styled.p`
  margin-left: 5px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 23.58px;
  color: ${(props) => (props.status === `streaming` ? `#FB5235` : ``)};

  @media screen and (max-width: 767px) {
    margin-left: 0;
    margin-bottom: 7px;
    font-size: 14px;
    line-height: 20.72px;
  }
`;

export const Icon = styled.img`
  margin-right: 8px;
  width: 18px;
  height: 20px;

  @media screen and (max-width: 767px) {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`;

export const Type = styled(TitleH1)`
  margin-bottom: 60px;

  @media screen and (max-width: 767px) {
    font-size: 32px;
    line-height: 134%;
    margin-bottom: 23px;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-size: 20px;
  line-height: 26.8px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 22.12px;
  }
`;

export const DateWrapper = styled.div`
  margin-right: 35px;
  display: flex;
  flex-direction: column;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    margin-bottom: 5px;
    flex-direction: row;
  }

  > p {
    margin-right: 5px;
  }
`;

export const DateWrapperTimeZone = styled.p`
  opacity: 0.5;
`;

export const Location = styled.div`
  max-width: 411px;
`;

export const SpeakersContainer = styled.div`
  margin-top: 35px;
  min-width: 345px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  @media screen and (max-width: 767px) {
    min-width: 0;
    margin-top: 40px;
    padding-bottom: 0;
  }
`;

export const Title = styled.p`
  margin-bottom: 40px;
  font-size: 32px;
  line-height: 38.4px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    margin-bottom: 34px;
    font-size: 22px;
    line-height: 26.4px;
  }
`;

export const Speaker = styled.div`
  margin-bottom: 33px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    margin-bottom: 21px;
  }
`;

export const Pic = styled.img`
  margin-right: 18px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    margin-right: 11px;
    width: 52px;
    height: 52px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  font-size: 16px;
  line-height: 21px;
  max-width: 240px;

  @media screen and (max-width: 767px) {
    padding-top: 5px;
    font-size: 14px;
    line-height: 18.34px;
  }
`;

export const SpeakerName = styled.p`
  margin-bottom: 3px;
  font-weight: 700;
`;

export const SpeakerJob = styled.p`
  opacity: 0.5;
`;

export const StyledButton = styled(Btn)`
  margin-top: 100px;

  @media screen and (max-width: 1360px) {
    margin-top: 70px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 35px;
  }
`;
