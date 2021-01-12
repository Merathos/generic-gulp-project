import { TextInput, CloseBtn, SelectInput, FileInput, Captcha } from 'elements';
import { useState } from 'react';
import form from 'mock/forms';
import { useForm } from 'react-hook-form';
import { SET_FORM_VACANCY } from 'graphql/forms';
import { useMutation } from '@apollo/client';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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

  const schema = yup.object().shape({
    name: yup.string().required('error'),
    lastname: yup.string().required('error'),
    email: yup
      .string()
      .email('warning')
      .required('error'),
    phone: yup
      .string()
      .test('empty', 'error', val => {
        return val !== '';
      })
      .test('len', 'warning', val => {
        const val_length_without_dashes = val.replace(/-|_|\s|\(|\)/g, '')
          .length;
        return val_length_without_dashes === 12;
      })
      .required('error'),
    personal: yup
      .boolean()
      .required()
      .oneOf([true], 'error'),
    cvLink: yup.string().test('file', 'error', val => {
      return val.length !== 0 || getValues('cvFile').length !== 0;
    }),
  });

  const { handleSubmit, register, errors, getValues, control } = useForm({
    defaultValues: { phone: '', contact: '' },
    resolver: yupResolver(schema),
  });

  const handleChange = event => {
    setCheckedEls({
      ...checkedEls,
      [event.target.id]: event.target.checked,
    });
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
          communication_method: values.contact?.value,
          tg_login: values.telegram,
          resume_file: values.cvFile[0]?.name,
          resume_link: values.cvLink,
          vacancy_id: id,
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
            {contact.inputs.map((item, i) => {
              return (
                <TextInput
                  key={i}
                  name={item.name}
                  label={item.label}
                  register={register({
                    // required: true,
                    // pattern:
                    //   item.name === 'email'
                    //     ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    //     : '',
                  })}
                  error={errors[item.name]?.message === 'error'}
                  warning={errors[item.name]?.message === 'warning'}
                  errorMsg={
                    (errors[item.name]?.message === 'error' && item.error) ||
                    (errors[item.name]?.message === 'warning' && item.warning)
                  }
                  mask={item.mask}
                  control={control}
                />
              );
            })}
            <S.SelectContainer>
              <SelectInput
                options={contact.select.options}
                placeholder={contact.select.placeholder}
                name={contact.select.name}
                setOpened={() => setIsOpen(true)}
                setClosed={() => setIsOpen(false)}
                control={control}
              />
              {getValues('contact')?.value === 'telegram' && (
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
              error={errors.cvLink?.message === 'error'}
              register={register()}
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
            register={register()}
            error={errors?.personal?.message === 'error'}
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
