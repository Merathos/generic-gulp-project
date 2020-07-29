import styled from 'styled-components';
import TitleH2 from '/elements/TitleH2';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const Block = styled.div`
  padding-left: 350px;
  position: relative;

  &::before {
    content: '';
    width: 480px;
    height: 530px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: red;
    background-image: url('backgrounds/vacancy-bottom.png');
  }

  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }

  &::before {
    display: none;
  }
`;

export const H2 = styled(TitleH2)`
  margin-bottom: 90px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
    padding-left: 0;
  }
`;

export const AdvertsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;