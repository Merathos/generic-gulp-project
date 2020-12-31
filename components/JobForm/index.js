import { TextInput, CloseBtn, SelectInput, FileInput, Captcha } from 'elements';
import { useState } from 'react';
import form from 'mock/forms';
import { useForm } from 'react-hook-form';
import { SET_FORM_VACANCY } from 'graphql/forms';
import { useMutation } from '@apollo/client';

import * as S from './styles';

const JobForm = ({ closeModal, showSuccess, title, id }) => {
  const {
    mainTitle,
    subtitle,
    contact,
    cv,
    agreement,
    mailing,
    buttonText,
  } = form.jobForm;
  const [checkedEls, setCheckedEls] = useState({});
  const [contactValue, setContactValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [sendVacancy] = useMutation(SET_FORM_VACANCY, {
    onCompleted(data) {
      if (data.Event) {
        closeModal();
        showSuccess();
      }
    },
  });

  const { handleSubmit, register, errors, getValues } = useForm();

  const handleChange = event => {
    setCheckedEls({
      ...checkedEls,
      [event.target.id]: event.target.checked,
    });
  };

  const handleContactValue = event => {
    setContactValue(event.value);
  };

  const onSubmit = values => {
    if (captchaPassed) {
      sendVacancy({
        variables: {
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          phone: values.phone,
          is_consent_pd: values.personal,
          is_consent_newsletter: values.newsletter,
          communication_method: contactValue,
          tg_login: values.telegram,
          resume_file: values.cvFile[0],
          vacancy_id: id,
          // ?: values.cvLink,
        },
      });
    }
  };

  return (
    <S.Container>
      <CloseBtn onClick={closeModal} />
      <S.TitleWrap>
        <S.MainTitle>{id && title ? title : mainTitle}</S.MainTitle>
        <S.Subtitle>{id ? subtitle : ''}</S.Subtitle>
      </S.TitleWrap>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Fade isOpen={isOpen} />
        <S.FormSection>
          <S.SectionTitle>{contact.title}</S.SectionTitle>
          <S.InputsContainer>
            {contact.inputs.map((item, i) => (
              <TextInput
                key={i}
                name={item.name}
                label={item.label}
                register={register({
                  required: true,
                  pattern:
                    item.name === 'email'
                      ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      : '',
                })}
                error={errors[item.name]?.type === 'required'}
                warning={errors[item.name]?.type === 'pattern'}
                errorMsg={
                  (errors[item.name]?.type === 'required' && item.error) ||
                  (errors[item.name]?.type === 'pattern' && item.warning)
                }
              />
            ))}
            <S.SelectContainer>
              <SelectInput
                options={contact.select.options}
                placeholder={contact.select.placeholder}
                onChange={handleContactValue}
                setOpened={() => setIsOpen(true)}
                setClosed={() => setIsOpen(false)}
                register={register()}
              />
              {contactValue === 'telegram' && (
                <TextInput
                  name="telegram"
                  label={contact.telegramLabel}
                  register={register()}
                />
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
              register={register()}
            />
            <TextInput
              name={cv.textInput.name}
              label={cv.textInput.label}
              cv
              error={errors.cvLink?.type === 'required'}
              register={register({
                required:
                  getValues('cvFile')?.length === 0 &&
                  getValues('cvLink') === '',
              })}
              errorMsg={cv.textInput.error}
            />
          </S.FileWrapper>
        </S.FormSection>
        <S.SubmitSection>
          <S.AgreemenCheckbox
            name={agreement.name}
            value={agreement.dataText}
            checked={checkedEls[agreement.name]}
            onChange={handleChange}
            register={register({
              required: true,
            })}
            error={errors?.personal?.type === 'required'}
          >
            <S.Link href={agreement.dataHref} target="_blank">
              {agreement.dataLink}
            </S.Link>
          </S.AgreemenCheckbox>
          <S.AgreemenCheckbox
            name={mailing.name}
            value={mailing.value}
            checked={checkedEls[mailing.name]}
            onChange={handleChange}
            register={register()}
          />
          <S.BottomWrap>
            <Captcha setCaptchaPassed={setCaptchaPassed} />
            <S.StyledButton type="submit" accent>
              {buttonText}
            </S.StyledButton>
          </S.BottomWrap>
        </S.SubmitSection>
      </S.Form>
    </S.Container>
  );
};

export default JobForm;
