import styled, { css } from 'styled-components';
import { TitleH2, Btn } from 'elements';
import { EventsCheckbox } from 'elements';

export const Container = styled.div`
  background-image: url('backgrounds/mailing-form.svg');
  background-position: right top 540px;
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
  top: 0;
  left: 0;
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
  max-width: 880px;
  margin-bottom: 21px;

  @media (max-width: 768px) {
    max-width: 330px;
    margin-bottom: 1px;
    font-size: 32px;
    line-height: 42.88px;
    letter-spacing: 0.01em;
  }
`;

export const FormSection = styled.fieldset`
  margin-bottom: 90px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const SubmitSection = styled(FormSection)`
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 80px;
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
  align-items: flex-start;

  @media (max-width: 1199px) {
    flex-direction: column;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 410px;
  flex-direction: column;

  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    flex-direction: column;
  }
`;

export const Question = styled.p`
  margin-top: 60px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  label {
    @media (max-width: 910px) {
      font-size: 20px;
      line-height: 26.8px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 22.12px;
    }
  }

  input:checked ~ label {
    color: #201f2b;
  }
`;

export const TechContainer = styled(InputsContainer)`
  margin-top: 32px;
`;

export const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 410px;

  @media (max-width: 1199px) {
    margin-bottom: 50px;
  }
`;

export const TimeContainer = styled(MonthContainer)`
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const TermsQuestion = styled.p`
  max-width: 390px;
  font-size: 20px;
  line-height: 26px;

  @media (max-width: 768px) {
    max-width: 290px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.029em;
  }
`;

export const RadioContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-flow: row wrap;
`;

export const FileWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const AgreemenCheckbox = styled(EventsCheckbox)`
  margin-bottom: 20px;

  label {
    font-size: 18px;
    line-height: 21.6px;

    @media (max-width: 910px) {
      font-size: 20px;
      line-height: 26.8px;
    }

    @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledButton = styled(Btn)`
  margin-left: 30px;
  margin-bottom: 4px;
  align-self: flex-end;

  @media (max-width: 768px) {
    width: 191px;
    margin-left: 0;
    margin-top: 18px;
    align-self: flex-start;
  }

  &:hover,
  &:active {
    background-color: #ec381a;
    color: #ffffff;
  }
`;
