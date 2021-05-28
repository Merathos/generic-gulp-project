import styled from 'styled-components';
import { TitleH2, TitleH3 } from 'elements';
import { Slider } from 'components';

export const H2 = styled(TitleH2)`
  margin-top: ${(props) => (props.isFirstBlockHeader ? '0' : '160px')};
  margin-bottom: 40px;
  max-width: 854px;

  @media screen and (max-width: 767px) {
    margin-top: ${(props) => (props.isFirstBlockHeader ? '0' : '80px')};
    margin-bottom: 20px;
  }
`;

export const H3 = styled(TitleH3)`
  margin-top: ${(props) => (props.isFirstBlockHeader ? '0' : '130px')};
  margin-bottom: 30px;
  max-width: 854px;

  @media screen and (max-width: 767px) {
    margin-top: ${(props) => (props.isFirstBlockHeader ? '0' : '70px')};
    margin-bottom: 10px;
  }
`;

export const StyledSlider = styled(Slider)`
  max-width: 850px;
`;

export const Wrapper = styled.aside`
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (max-width: 1360px) {
    position: static;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-right: -45px;
  @media screen and (max-width: 767px) {
    margin-right: -30px;
  }
`;

export const Block = styled.div`
  position: relative;
`;
