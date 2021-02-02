import styled, { css } from 'styled-components';
import { TitleH2, Btn, EventsCheckbox } from 'elements';

export const Container = styled.div`
  background-image: url('/backgrounds/mailing-form.svg');
  background-position: right top 540px;
  background-repeat: no-repeat;
  background-color: #ffffff;
  padding-top: 37px;
  padding-bottom: 90px;

  @media screen and (max-width: 768px) {
    padding-top: 22px;
    padding-bottom: 70px;
    background-image: none;
  }
`;

export const Form = styled.form`
  position: relative;
  margin-top: 110px;
  margin-left: 140px;
  box-sizing: border-box;
  max-width: 880px;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    padding: 30px;
  }
`;

export const Fade = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 10;

  ${(props) =>
    props.isOpen &&
    css`
      display: block;
    `};
`;

export const TitleWrap = styled.div`
  margin-left: 140px;
  max-width: 880px;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    padding: 30px;
  }
`;

export const MainTitle = styled(TitleH2)`
  max-width: 730px;
  margin-bottom: 21px;

  @media screen and (max-width: 768px) {
    max-width: 330px;
    margin-bottom: 15px;
    font-size: 32px;
    line-height: 43px;
    letter-spacing: 0.01em;
  }
`;

export const Subtitle = styled.p`
  font-size: 22px;
  line-height: 31px;
  max-width: 550px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

export const FormSection = styled.fieldset`
  margin-bottom: 90px;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const SubmitSection = styled(FormSection)`
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: 33px;
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  letter-spacing: normal;

  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  @media screen and (max-width: 1199px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const FileWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const AgreemenCheckbox = styled(EventsCheckbox)`
  margin-bottom: 20px;

  label {
    font-size: 18px;
    line-height: 22px;

    @media screen and (max-width: 910px) {
      font-size: 20px;
      line-height: 27px;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 22px;
    }
  }

  input:checked ~ label {
    color: #201f2b;
  }
`;

export const Link = styled.a`
  display: inline;
  color: #53b443;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #339722;
  }
`;

export const BottomWrap = styled.div`
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    #rc-imageselect,
    div {
      width: 195px;
      transform: scale(0.891);
      -webkit-transform: scale(0.9);
      transform-origin: 0 0;
      -webkit-transform-origin: 0 0;
    }
  }
`;

export const StyledButton = styled(Btn)`
  margin-left: 30px;
  margin-bottom: 4px;
  align-self: flex-end;

  @media screen and (max-width: 768px) {
    width: 191px;
    margin-left: 0;
    margin-top: -10px;
    align-self: flex-start;
  }

  &:hover,
  &:active {
    background-color: #ec381a;
    color: #ffffff;
  }
`;
