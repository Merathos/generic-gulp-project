import { EventsCheckbox, TitleH2 } from 'elements';
import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/backgrounds/mailing-form.svg');
  background-position: right top 380px;
  background-repeat: no-repeat;
  background-color: #ffffff;
  padding-top: 37px;
  padding-bottom: 90px;

  @media screen and (max-width: 767px) {
    padding-top: 22px;
    padding-bottom: 70px;
    background-image: none;
  }
`;

export const Form = styled.form`
  margin-left: 140px;
  box-sizing: border-box;
  max-width: 880px;

  @media screen and (max-width: 1360px) {
    margin: 0 auto;
    padding: 30px;
  }
`;

export const MainTitle = styled(TitleH2)`
  max-width: 880px;
  margin-bottom: 110px;

  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
    font-size: 32px;
    line-height: 42.88px;
    letter-spacing: 0.01em;
  }
`;

export const FormSection = styled.fieldset`
  margin-bottom: 90px;

  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
  }
`;

export const MultivarSection = styled(FormSection)`
  margin-bottom: 70px;

  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: 33px;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 700;
  letter-spacing: normal;

  @media screen and (max-width: 767px) {
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

  @media screen and (max-width: 1360px) {
    flex-direction: column;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 0px;

  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
    flex-direction: column;
  }
`;

export const Question = styled.p`
  margin-top: 60px;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 22px;
    margin-top: 38px;
    margin-bottom: 30px;
    letter-spacing: -0.029em;
  }
`;

export const CheckBox = styled(EventsCheckbox)`
  margin-right: 27px;
  margin-bottom: 27px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }

  label {
    @media screen and (max-width: 910px) {
      font-size: 20px;
      line-height: 26.8px;
    }

    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 22.12px;
    }
  }

  input:checked ~ label {
    color: #201f2b;
  }
`;

export const AgreemenCheckbox = styled(EventsCheckbox)`
  margin-bottom: 20px;

  label {
    font-size: 18px;
    line-height: 21.6px;

    @media screen and (max-width: 910px) {
      font-size: 20px;
      line-height: 26.8px;
    }

    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 22.12px;
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

  @media screen and (max-width: 767px) {
    flex-direction: column;

    #rc-imageselect,
    div {
      width: 195px;
      transform: scale(0.891);
      -webkit-transform: scale(0.891);
      transform-origin: 0 0;
      -webkit-transform-origin: 0 0;
    }
  }
`;

export const StyledButton = styled.button`
  margin-left: 30px;
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  background: #fb5235;
  border-radius: 8px;
  padding: 0 32px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  transition: all 0.3s ease;

  @media screen and (max-width: 767px) {
    padding: 21px 20px;
    min-width: 191px;
    font-size: 12px;
    line-height: 14px;
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
