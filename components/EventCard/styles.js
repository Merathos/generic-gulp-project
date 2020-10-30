import styled from 'styled-components';
import { TitleH2, Btn } from 'elements';

export const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 300px;
  border-radius: 10px;
  padding: 60px;
  background-color: #f7f8f9;

  @media (max-width: 910px) {
    padding: 80px 30px;
    border-radius: 0;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled(TitleH2)`
  color: ${props => props.color};
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(82%);
  }

  @media (max-width: 910px) {
    margin-bottom: 15px;
    width: 100%;
    font-size: 32px;
    line-height: 42.88px;
    letter-spacing: 0.01em;
  }
`;

export const DateContainer = styled.div`
  margin-left: auto;
  padding-top: 7px;
  color: ${props => props.color};

  @media (max-width: 910px) {
    margin: 0;
  }
`;

export const Date = styled.p`
  margin-bottom: 22px;
  text-align: right;
  font-size: 50px;
  line-height: 60px;

  @media (max-width: 910px) {
    margin-bottom: 0;
    text-align: left;
    font-size: 26px;
    line-height: 31.2px;
  }
`;

export const Time = styled.p`
  text-align: right;
  font-size: 18px;
  line-height: 23.58px;

  @media (max-width: 910px) {
    text-align: left;
    font-size: 14px;
    line-height: 20.72px;
  }
`;

export const Status = styled.p`
  margin-top: -20px;
  margin-bottom: 57px;
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 23.58px;
  color: ${props => (props.status === `Идет трансляция` ? `#FB5235` : ``)};

  @media (max-width: 910px) {
    margin-top: -42px;
    margin-left: auto;
    margin-bottom: 60px;
    width: fit-content;
    font-size: 14px;
    line-height: 20.72px;
  }

  @media (max-width: 768px) {
    max-width: 135px;
  }
`;

export const Icon = styled.img`
  margin-right: 8px;
  width: 16px;
  height: 16px;

  @media (max-width: 910px) {
    margin-right: 6px;
  }
`;

export const TopicContainer = styled.div`
  margin-bottom: 7px;
  display: flex;
  padding-top: 18px;
  border-top: 2px solid rgba(32, 31, 42, 0.1);

  @media (max-width: 910px) {
    margin-bottom: 25px;
    flex-direction: column;
  }
`;

export const TopicName = styled.p`
  max-width: 385px;
  margin-top: 3px;
  margin-right: auto;
  font-size: 24px;
  line-height: 33.6px;
  font-weight: 700;

  @media (max-width: 910px) {
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const SpeakerContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 270px;
`;

export const Speaker = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 910px) {
    margin-bottom: 21px;
  }
`;

export const Pic = styled.img`
  margin-right: 20px;
  width: 63px;
  height: 63px;
  border-radius: 50%;

  @media (max-width: 910px) {
    margin-right: 11px;
    width: 51.22px;
    height: 51.22px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 240px;
  padding-top: 11px;
  font-size: 18px;
  line-height: 23.58px;

  @media (max-width: 910px) {
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

export const BottomWrapper = styled.div`
  margin-top: 55px;
  margin-bottom: 42px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 910px) {
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 0;
  }
`;

export const StyledButton = styled(Btn)`
  @media (max-width: 910px) {
    margin-bottom: 22px;
  }
`;

export const Location = styled.p`
  text-align: right;
  max-width: 185px;
  align-self: flex-end;
  font-size: 16px;
  line-height: 20.96px;
  opacity: 0.5;

  @media (max-width: 910px) {
    max-width: 100%;
    text-align: left;
    align-self: flex-start;
    font-size: 14px;
    line-height: 20.72px;
  }
`;

export const Link = styled.a`
  display: block;
  height: max-content;
  max-width: 470px;
  padding-bottom: 30px;

  @media (max-width: 910px) {
    padding-bottom: 0;
    width: 100%;
    max-width: 100%;
  }
`;
