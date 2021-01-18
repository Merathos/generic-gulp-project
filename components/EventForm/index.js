import { useMutation } from '@apollo/client';
import { CloseBtn, TextInput, Captcha } from 'elements';
import { SET_EVENTS_SUBSCRIPTION } from 'graphql/events';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './styles';

const EventForm = ({
  data: { mainTitle, contact, directions, agreement, mailing, buttonText },
  closeModal,
  showSuccess,
  showError,
  eventCategories,
}) => {
  const [checkedEls, setCheckedEls] = useState({});
  const [selectedEventCategories, setSelectedEventCategories] = useState([]);
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [subscribe] = useMutation(SET_EVENTS_SUBSCRIPTION);
  const schema = yup.object().shape({
    name: yup.string().required('error'),
    lastname: yup.string().required('error'),
    email: yup
      .string()
      .email('warning')
      .required('error'),
    personal: yup
      .boolean()
      .required()
      .oneOf([true], 'error'),
    newsletter: yup.boolean(),
  });
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

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

  const onSubmit = async values => {
    if (captchaPassed) {
      const { data, errors: submitErrors } = await subscribe({
        variables: {
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          is_consent_pd: values.personal,
          is_consent_newsletter: values.newsletter,
          categories: selectedEventCategories,
        },
      });

      if (submitErrors?.message) {
        closeModal();
        showError();
      }

      if (data?.Event) {
        closeModal();
        showSuccess();
      }
    }
  };

  return (
    <S.Container>
      <CloseBtn onClick={closeModal} />
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.MainTitle>{mainTitle}</S.MainTitle>
        <S.FormSection>
          <S.SectionTitle>{contact.title}</S.SectionTitle>
          <S.InputsContainer>
            {contact.inputs.map((item, i) => (
              <TextInput
                key={i}
                name={item.name}
                label={item.label}
                register={register()}
                error={errors[item.name]?.message === 'error'}
                warning={errors[item.name]?.message === 'warning'}
                errorMsg={
                  (errors[item.name]?.message === 'error' && item.error) ||
                  (errors[item.name]?.message === 'warning' && item.warning)
                }
                mask={item.mask}
                maskChar={item.maskChar}
                maskPlaceholder={item.maskPlaceholder}
              />
            ))}
          </S.InputsContainer>
        </S.FormSection>
        <S.MultivarSection>
          <S.SectionTitle>{directions.title}</S.SectionTitle>
          <S.Question>{directions.question}</S.Question>
          <S.CheckboxContainer>
            {eventCategories.map(item => (
              <S.CheckBox
                key={item.id}
                name={item.slug}
                value={item.name}
                checked={checkedEls[item.slug]}
                onChange={event => handleEventCategoryChange(event, item.id)}
                register={register()}
              />
            ))}
          </S.CheckboxContainer>
        </S.MultivarSection>
        <S.FormSection>
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
            <S.StyledButton type="submit">
              {/* disabled={!captchaPassed} */}
              {buttonText}
            </S.StyledButton>
          </S.BottomWrap>
        </S.FormSection>
      </S.Form>
    </S.Container>
  );
};

export default EventForm;
