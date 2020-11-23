import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Section = styled.section`
  margin-bottom: 155px;
  overflow: hidden;

  @media (max-width: 768px) {
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
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 28px;
  }
`;

export const Msg = styled.p`
  margin-bottom: 100px;
  font-size: 20px;
  line-height: 32px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Chat = styled.div`
  width: 100%;

  iframe {
    width: 100%;
    border: none;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
