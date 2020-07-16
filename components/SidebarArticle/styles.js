import styled from 'styled-components';
import { TitleH4, TitleH5, Icon } from '/elements';

export const Title = styled(TitleH4)`
  margin-bottom: 40px;
`;

export const H5 = styled(TitleH5)`
  margin-bottom: 12px;
`;

export const Section = styled.div`
  margin-bottom: 930px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const SectionIcon = styled.div`
  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const SectionButton = styled.div`
  margin-bottom: 50px;
  margin-top: 40px;
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 120%;
  }
`;

export const StyledIcon = styled(Icon)`
  margin-bottom: 26px;
`;