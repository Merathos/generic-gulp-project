import styled from 'styled-components';
import { TitleH1, Btn, Text } from 'elements';

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 50px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 420px) {
    padding: 110px 30px 64px;
    max-width: 375px;
  }

  @media screen and (max-width: 340px) {
    padding: 110px 20px 64px;
    max-width: 320px;
  }

  @media (max-width: 768px) {
    & > div {
      min-width: 240px;
    }
  }

  @media (max-width: 420px) {
    & > div {
      min-width: 210px;
    }
  }
`;

export const TextBlock = styled.div`
  max-width: 627px;
  margin-bottom: 20px;
`;

export const Bold = styled.b`
  font-weight: 700;
  margin-right: 5px;
`;

export const Wrapper = styled.div`
  margin-top: 60px;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const StyledButton = styled(Btn)`
  margin-top: 40px;
`;

export const H1 = styled(TitleH1)`
  max-width: 870px;
`;

export const StyledText = styled(Text)`
  display: inline;
`;

export const Picture = styled.img`
  margin-left: 50px;
  @media screen and (max-width: 420px) {
    margin-left: 0;
  }
`;
