import * as S from './styles';
import { TextInput, CloseBtn } from 'elements';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const SubForm = ({
  data: { mainTitle, contact, directions, agreement, buttonText },
  closeModal,
  showSuccess,
}) => {
  const [checkedEls, setCheckedEls] = useState({});

  const handleChange = event => {
    setCheckedEls({
      ...checkedEls,
      [event.target.id]: event.target.checked,
    });
  };

  return (
    <S.Container>
      <CloseBtn onClick={closeModal} />
      <S.Form action="#">
        <S.MainTitle>{mainTitle}</S.MainTitle>
        <S.FormSection>
          <S.SectionTitle>{contact.title}</S.SectionTitle>
          <S.InputsContainer>
            {contact.inputs.map((el, i) => (
              <TextInput key={i} name={el.name} label={el.label} />
            ))}
          </S.InputsContainer>
        </S.FormSection>
        <S.MultivarSection>
          <S.SectionTitle>{directions.title}</S.SectionTitle>
          <S.Question>{directions.question}</S.Question>
          <S.CheckboxContainer>
            {directions.inputs.map((item, i) => (
              <S.CheckBox
                key={i}
                name={item}
                checked={checkedEls[item]}
                onChange={handleChange}
                color={'#53B443'}
              />
            ))}
          </S.CheckboxContainer>
        </S.MultivarSection>
        <S.FormSection>
          <S.AgreemenCheckbox
            name={agreement.dataText}
            checked={checkedEls[agreement.dataText]}
            onChange={handleChange}
            color={'#53B443'}
          >
            <S.Link href={agreement.dataHref} target="_blank">
              {agreement.dataLink}
            </S.Link>
          </S.AgreemenCheckbox>
          <S.AgreemenCheckbox
            name={agreement.mailing}
            checked={checkedEls[agreement.mailing]}
            onChange={handleChange}
            color={'#53B443'}
          />
          <S.BottomWrap>
            <ReCAPTCHA sitekey="Your client site key" onChange={() => {}} />
            <S.StyledButton
              type="submit"
              onClick={e => {
                e.preventDefault();
                closeModal();
                showSuccess();
              }}
            >
              {buttonText}
            </S.StyledButton>
          </S.BottomWrap>
        </S.FormSection>
      </S.Form>
    </S.Container>
  );
};

export default SubForm;
