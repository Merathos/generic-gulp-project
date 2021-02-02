import styled from 'styled-components';
import { TitleH2 } from 'elements';
import { MarkerList } from 'components';

export const Section = styled.section`
  margin-bottom: 160px;

  @media screen and (min-width: 900px) {
    margin-bottom: 80px;
    background-image: url('/backgrounds/recap.svg');
    background-position: right 0 top 655px;
    background-repeat: no-repeat;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
`;

export const TopicWrapper = styled.div`
  max-width: 854px;
  margin-bottom: 145px;

  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

export const Topic = styled(TitleH2)`
  margin-bottom: 80px;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 28px;
  }
`;

export const Text = styled.p`
  margin-top: 60px;
  margin-bottom: 65px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 35px;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  margin-top: 135px;

  @media screen and (max-width: 768px) {
    margin-top: 65px;
    margin-right: -30px;
  }
`;

export const StyledMarkerList = styled(MarkerList)`
  padding-left: 20px;
`;
