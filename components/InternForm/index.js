import * as S from './styles';
import {
  TextInput,
  CloseBtn,
  SelectInput,
  SmartTextarea,
  FileInput,
  RadioBtn,
} from 'elements';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const InternForm = ({
  data: { mainTitle, contact, education, terms, cv, agreement, buttonText },
  closeModal,
  showSuccess,
}) => {
  const [checkedEls, setCheckedEls] = useState({});
  const [selectValue, setSelectValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckbox = event => {
    setCheckedEls({
      ...checkedEls,
      [event.target.id]: event.target.checked,
    });
  };

  const handleSelectValue = event => {
    setSelectValue(event.value);
  };

  return (
    <S.Container>
      <CloseBtn onClick={closeModal} />
      <S.TitleWrap>
        <S.MainTitle>{mainTitle}</S.MainTitle>
      </S.TitleWrap>
      <S.Form action="#">
        <S.Fade isOpen={isOpen}></S.Fade>
        <S.FormSection>
          <S.SectionTitle>{contact.title}</S.SectionTitle>
          <S.InputsContainer>
            {contact.inputs.map((el, i) => (
              <TextInput
                key={i}
                name={el.name}
                label={el.label}
                type={el.type}
                date={el.date}
              />
            ))}
            <S.SelectContainer>
              <SelectInput
                options={contact.select.options}
                placeholder={contact.select.placeholder}
                onChange={handleSelectValue}
                setOpened={() => setIsOpen(true)}
                setClosed={() => setIsOpen(false)}
              />
              {selectValue === 'telegram' && (
                <TextInput name="telegram" label="Ник в Telegram" />
              )}
            </S.SelectContainer>
          </S.InputsContainer>
        </S.FormSection>
        <S.FormSection>
          <S.SectionTitle>{education.title}</S.SectionTitle>
          <S.InputsContainer>
            {education.inputs.map((el, i) => (
              <TextInput
                key={i}
                name={el.name}
                label={el.label}
                type={el.type}
              />
            ))}
          </S.InputsContainer>
        </S.FormSection>
        <S.FormSection>
          <S.SectionTitle>{terms.title}</S.SectionTitle>
          <S.Question>{terms.direction.question}</S.Question>
          <S.CheckboxContainer>
            {terms.direction.inputs.map((item, i) => (
              <S.CheckBox
                key={i}
                name={item}
                checked={checkedEls[item]}
                onChange={handleCheckbox}
                color={'#53B443'}
              />
            ))}
          </S.CheckboxContainer>
          <S.TechContainer>
            {terms.tech.map((item, i) => (
              <SmartTextarea
                key={i}
                label={item.label}
                placeholder={item.placeholder}
                name={item.name}
              />
            ))}
            <S.MonthContainer>
              <S.TermsQuestion>{terms.startingMonth.question}</S.TermsQuestion>
              <SelectInput
                options={terms.startingMonth.options}
                placeholder={terms.startingMonth.placeholder}
                setOpened={() => setIsOpen(true)}
                setClosed={() => setIsOpen(false)}
              />
            </S.MonthContainer>
            <S.TimeContainer>
              <S.TermsQuestion>{terms.time.question}</S.TermsQuestion>
              <S.RadioContainer>
                {terms.time.inputs.map((item, i) => (
                  <RadioBtn
                    key={i}
                    label={item.label}
                    value={item.value}
                    name={item.name}
                  />
                ))}
              </S.RadioContainer>
            </S.TimeContainer>
          </S.TechContainer>
        </S.FormSection>
        <S.FormSection>
          <S.SectionTitle>{cv.title}</S.SectionTitle>
          <S.FileWrapper>
            <FileInput
              id={cv.fileInput.id}
              name={cv.fileInput.name}
              label={cv.fileInput.label}
              fileExt={cv.fileInput.fileExt}
            />
            <TextInput name={cv.textInput.name} label={cv.textInput.label} cv />
          </S.FileWrapper>
        </S.FormSection>
        <S.SubmitSection>
          <S.AgreemenCheckbox
            name={agreement.dataText}
            checked={checkedEls[agreement.dataText]}
            onChange={handleCheckbox}
            color={'#53B443'}
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

export default InternForm;
