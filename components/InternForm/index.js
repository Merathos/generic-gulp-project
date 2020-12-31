import {
  TextInput,
  CloseBtn,
  SelectInput,
  SmartTextarea,
  FileInput,
  RadioBtn,
  Captcha,
} from 'elements';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import form from 'mock/forms';
import { SET_FORM_INTERNSHIP } from 'graphql/forms';
import { GET_EVENT_CATEGORIES } from 'graphql/events';

import * as S from './styles';

const InternForm = ({ closeModal, showSuccess }) => {
  const {
    mainTitle,
    contact,
    education,
    terms,
    cv,
    agreement,
    mailing,
    buttonText,
  } = form.internForm;
  const [checkedEls, setCheckedEls] = useState({});
  const [contactValue, setContactValue] = useState('');
  const [monthValue, setMonthValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [selectedEventCategories, setSelectedEventCategories] = useState([]);

  const { data: eventCategoriesData } = useQuery(GET_EVENT_CATEGORIES);
  const [sendVacancy] = useMutation(SET_FORM_INTERNSHIP, {
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

  const handleEventCategoryChange = (event, id) => {
    setCheckedEls({
      ...checkedEls,
      [event.target.id]: event.target.checked,
    });
    setSelectedEventCategories(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleSelectValue = (event, select) => {
    if (select.name === 'contact') {
      setContactValue(event.value);
    }
    if (select.name === 'month') {
      setMonthValue(event.value);
    }
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
          dob: values.birthDate,
          university: values.university,
          faculty: values.faculty,
          course: values.course,
          technologies_like: values.techWish,
          technologies_use: values.techExp,
          start_month: monthValue,
          hours: values.time,
          resume_file: values.cvFile[0],
          categories: selectedEventCategories,
          // ?: values.cvLink,
        },
      });
    }
  };

  return (
    <S.Container>
      <CloseBtn onClick={closeModal} />
      <S.TitleWrap>
        <S.MainTitle>{mainTitle}</S.MainTitle>
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
                name={contact.select.name}
                onChange={handleSelectValue}
                setOpened={() => setIsOpen(true)}
                setClosed={() => setIsOpen(false)}
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
          <S.SectionTitle>{education.title}</S.SectionTitle>
          <S.InputsContainer>
            {education.inputs.map((item, i) => (
              <TextInput
                key={i}
                name={item.name}
                label={item.label}
                register={register({
                  required: true,
                })}
                error={errors[item.name]?.type === 'required'}
                errorMsg={errors[item.name]?.type === 'required' && item.error}
              />
            ))}
          </S.InputsContainer>
        </S.FormSection>
        <S.FormSection>
          <S.SectionTitle>{terms.title}</S.SectionTitle>
          <S.Question>{terms.direction.question}</S.Question>
          <S.CheckboxContainer>
            {eventCategoriesData?.event_categories?.map(item => (
              <S.CheckBox
                key={item.id}
                name={item.slug}
                value={item.name}
                checked={checkedEls[item.slug]}
                onChange={event => handleEventCategoryChange(event, item.id)}
                register={register({
                  required: selectedEventCategories.length === 0,
                })}
                error={
                  errors[item.slug]?.type === 'required' &&
                  selectedEventCategories.length === 0
                }
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
                register={register({
                  required: true,
                })}
                error={errors[item.name]?.type === 'required'}
              />
            ))}
            <S.MonthContainer>
              <S.TermsQuestion>{terms.startingMonth.question}</S.TermsQuestion>
              <SelectInput
                options={terms.startingMonth.options}
                placeholder={terms.startingMonth.placeholder}
                name={terms.startingMonth.name}
                onChange={handleSelectValue}
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
                    id={item.id}
                    value={item.value}
                    name={item.name}
                    register={register({
                      required: true,
                    })}
                    error={errors[item.name]?.type === 'required'}
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

export default InternForm;
