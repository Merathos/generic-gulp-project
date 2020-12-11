import { useMutation } from '@apollo/react-hooks';
import { CloseBtn, TextInput } from 'elements';
import { SET_EVENTS_SUBSCRIPTION } from 'graphql/events';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as S from './styles';

const SubForm = ({
  data: { mainTitle, contact, directions, agreement, mailing, buttonText },
  closeModal,
  showSuccess,
  eventCategories,
}) => {
  const [checkedEls, setCheckedEls] = useState({});
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [subscribe, { error }] = useMutation(SET_EVENTS_SUBSCRIPTION, {
    onCompleted() {
      closeModal();
      showSuccess();
    },
  });
  const { handleSubmit, register } = useForm();

  const handleChange = event => {
    setCheckedEls({
      ...checkedEls,
      [event.target.id]: event.target.checked,
    });
  };

  const onSubmit = values => {
    if (captchaPassed) {
      subscribe({
        variables: {
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          is_consent_pd: values.personal,
          is_consent_newsletter: values.newsletter,
          categories: [],
        },
      });
    }
  };

  function onChangeRecaptcha(value) {
    setCaptchaPassed(value);
  }

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
                label={item.placeholder}
                reference={register({
                  required: 'Required',
                })}
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
                onChange={handleChange}
                color="#53B443"
                reference={register()}
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
            color="#53B443"
            reference={register()}
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
            color="#53B443"
            reference={register()}
          />
          <S.BottomWrap>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
              onChange={onChangeRecaptcha}
            />
            <S.StyledButton type="submit" disabled={!captchaPassed}>
              {buttonText}
            </S.StyledButton>
          </S.BottomWrap>
          {JSON.stringify(error)}
        </S.FormSection>
      </S.Form>
    </S.Container>
  );
};

export default SubForm;
