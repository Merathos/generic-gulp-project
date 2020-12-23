import * as S from './styles';
import { TextInput, CloseBtn, SelectInput, FileInput } from 'elements';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const JobForm = ({
  data: { mainTitle, subtitle, contact, cv, agreement, buttonText },
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
        <S.Subtitle>{subtitle}</S.Subtitle>
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
                phone={el.phone}
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

export default JobForm;
