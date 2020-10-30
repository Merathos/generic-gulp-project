import styled from 'styled-components';
import { TitleH2, EventsCheckbox } from 'elements';

export const Container = styled.div`
  background-image: url('backgrounds/mailing-form.svg');
  background-position: right top 380px;
  background-repeat: no-repeat;
  background-color: #ffffff;
  padding-top: 37px;
  padding-bottom: 182px;

  @media (max-width: 768px) {
    padding-top: 22px;
    padding-bottom: 70px;
    background-image: none;
  }
`;

export const Form = styled.form`
  margin-left: 140px;
  box-sizing: border-box;
  max-width: 880px;

  @media (max-width: 1200px) {
    margin: 0 auto;
    padding: 30px;
  }
`;

export const MainTitle = styled(TitleH2)`
  max-width: 880px;
  margin-bottom: 110px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
    font-size: 32px;
    line-height: 42.88px;
    letter-spacing: 0.01em;
  }
`;

export const FormSection = styled.fieldset`
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: 60px;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 700;
  letter-spacing: normal;

  @media (max-width: 768px) {
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 0.01em;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 72px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    flex-direction: column;
  }
`;

export const Question = styled.p`
  margin-bottom: 40px;

  @media (max-width: 768px) {
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
`;

export const BottomWrap = styled.div`
  display: flex;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
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
  align-self: flex-end;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 18px;
    align-self: flex-start;
  }

  &:hover {
    color: #53b443;
  }
`;
