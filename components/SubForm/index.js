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
}) => {
  const [checkedEls, setCheckedEls] = useState({});
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
    console.log(values);
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
            {directions.inputs.map((item, i) => (
              <S.CheckBox
                key={i}
                name={item}
                value={item}
                checked={checkedEls[item]}
                onChange={handleChange}
                color="#53B443"
                // reference={register()}
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
            <ReCAPTCHA sitekey="Your client site key" onChange={() => {}} />
            <S.StyledButton
              type="submit"
              // onClick={e => {
              //   e.preventDefault();
              //   onClick();
              // }}
            >
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
