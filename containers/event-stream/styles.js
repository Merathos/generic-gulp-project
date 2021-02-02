import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Section = styled.section`
  margin-bottom: 155px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
`;

export const StreamWrapper = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 28px;
  }
`;

export const TimeWatch = styled.img`
  width: 26px;
  height: 26px;
  position: relative;
  top: 3px;
  @media screen and (max-width: 768px) {
    width: 16px;
    height: 16px;
    top: 2px;
  }
`;

export const Msg = styled.div`
  font-size: ${(props) =>
    props.isStartingIn24Hrs && !props.status === 'streaming' ? `26px` : `20px`};
  color: ${(props) => (props.status === 'streaming' ? `#FB5235` : ``)};
  line-height: 32px;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    font-size: ${(props) => (props.isStartingIn24Hrs ? `16px` : `14px`)};
    line-height: 22px;
  }
`;

export const TimeUntilStart = styled.span`
  color: #2f8ed9;
`;

export const Chat = styled.div`
  width: 100%;

  iframe {
    width: 100%;
    border: none;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const RegisterLink = styled.span`
  display: inline;
  color: #53b443;
  transition: color 0.3s;

  &:hover,
  &:active {
    color: #339722;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  margin-right: 8px;
  width: 16px;
  height: 16px;

  @media screen and (max-width: 768px) {
    margin-right: 6px;
  }
`;
