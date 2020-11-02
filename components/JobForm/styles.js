import styled, { css } from 'styled-components';
import { TitleH2 } from 'elements';
import { EventsCheckbox } from 'elements';

export const Container = styled.div`
  background-image: url('backgrounds/mailing-form.svg');
  background-position: right top 380px;
  background-repeat: no-repeat;
  background-color: #ffffff;
  padding-top: 37px;
  padding-bottom: 90px;

  @media (max-width: 768px) {
    padding-top: 22px;
    padding-bottom: 70px;
    background-image: none;
  }
`;

export const Form = styled.form`
  position: relative;
  padding-bottom: 300px;

  margin-top: 110px;
  margin-left: 140px;
  box-sizing: border-box;
  max-width: 880px;

  @media (max-width: 1200px) {
    margin: 0 auto;
    padding: 30px;
  }
`;

export const Fade = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 10;

  ${props =>
    props.isOpen &&
    css`
      display: block;
    `};
`;

export const TitleWrap = styled.div`
  margin-left: 140px;
  max-width: 880px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    margin: 0 auto;
    padding: 30px;
  }
`;

export const MainTitle = styled(TitleH2)`
  max-width: 550px;
  margin-bottom: 21px;

  @media (max-width: 768px) {
    max-width: 330px;
    margin-bottom: 60px;
    font-size: 32px;
    line-height: 42.88px;
    letter-spacing: 0.01em;
  }
`;

export const Subtitle = styled.p`
  font-size: 22px;
  line-height: 31px;
  max-width: 550px;
`;

export const FormSection = styled.fieldset`
  margin-bottom: 90px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: 33px;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 700;
  letter-spacing: normal;

  @media (max-width: 768px) {
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 0.01em;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (max-width: 1199px) {
    flex-direction: column;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const FileWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
`;
