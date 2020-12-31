import { TextInput, CloseBtn, Captcha } from 'elements';
import { useState } from 'react';
import form from 'mock/forms';
import { useForm } from 'react-hook-form';
import { SET_FORM_SUBSCRIPTION } from 'graphql/forms';
import { useMutation } from '@apollo/client';
import * as S from './styles';

const MailingForm = ({ closeModal, showSuccess }) => {
  const {
    mainTitle,
    contact,
    agreement,
    mailing,
    buttonText,
  } = form.mailingForm;
  const [checkedEls, setCheckedEls] = useState({});
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [sendSubscription] = useMutation(SET_FORM_SUBSCRIPTION, {
    onCompleted(data) {
      if (data.Event) {
        closeModal();
        showSuccess();
      }
    },
  });

  const { handleSubmit, register, errors } = useForm();

  const handleChange = event => {
    setCheckedEls({
      ...checkedEls,
      [event.target.id]: event.target.checked,
    });
  };

  const onSubmit = values => {
    if (captchaPassed) {
      sendSubscription({
        variables: {
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          is_consent_pd: values.personal,
          is_consent_newsletter: values.newsletter,
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
          </S.InputsContainer>
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

export default MailingForm;
