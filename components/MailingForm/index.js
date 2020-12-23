import * as S from './styles';
import { TextInput, CloseBtn } from 'elements';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const MailingForm = ({
  data: { mainTitle, contact, agreement, buttonText },
  closeModal,
  showSuccess,
}) => {
  const [checkedEls, setCheckedEls] = useState({});

  const handleCheckbox = event => {
    setCheckedEls({
      ...checkedEls,
      [event.target.id]: event.target.checked,
    });
  };

  return (
    <S.Container>
      <CloseBtn onClick={closeModal} />
      <S.TitleWrap>
        <S.MainTitle>{mainTitle}</S.MainTitle>
      </S.TitleWrap>
      <S.Form action="#">
        <S.FormSection>
          <S.SectionTitle>{contact.title}</S.SectionTitle>
          <S.InputsContainer>
            {contact.inputs.map((el, i) => (
              <TextInput
                key={i}
                name={el.name}
                label={el.label}
                type={el.type}
              />
            ))}
          </S.InputsContainer>
        </S.FormSection>
        <S.SubmitSection>
          <S.AgreemenCheckbox
            name={agreement.dataText}
            checked={checkedEls[agreement.dataText]}
            onChange={handleCheckbox}
            color={'#53B443'}
            value={agreement.dataText}
          >
            <S.Link href={agreement.dataHref} target="_blank">
              {agreement.dataLink}
            </S.Link>
          </S.AgreemenCheckbox>
          <S.AgreemenCheckbox
            name={agreement.mailing}
            checked={checkedEls[agreement.mailing]}
            onChange={handleCheckbox}
            color={'#53B443'}
            value={agreement.mailing}
          />
          <S.BottomWrap>
            <ReCAPTCHA sitekey="Your client site key" onChange={() => {}} />
            <S.StyledButton
              type="submit"
              accent={true}
              onClick={e => {
                e.preventDefault();
                closeModal();
                showSuccess();
              }}
            >
              {buttonText}
            </S.StyledButton>
          </S.BottomWrap>
        </S.SubmitSection>
      </S.Form>
    </S.Container>
  );
};

export default MailingForm;
