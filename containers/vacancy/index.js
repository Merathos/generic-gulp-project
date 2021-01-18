import {
  VacancyHeader,
  Articles,
  Application,
  ArticleContent,
  OfficesMap,
  Conditions,
  SliderVacancy,
  JobForm,
  Recruiters,
} from 'components';
import { FormModal, SuccessModal } from 'containers';
import { useState } from 'react';
import form from 'mock/forms';
import {
  Container,
  GreyContainer,
  SliderContainer,
  SliderSection,
  VacancySection,
  ConditionsSection,
} from './styles';

const Vacancy = ({ data, back }) => {
  const content = JSON.parse(back.content);
  const [jobModalIsShown, setJobModalIsShown] = useState(false);
  const [successModalIsShown, setSuccessIsShown] = useState(false);

  function toggleJobModal() {
    setJobModalIsShown(prev => !prev);
  }

  function toggleSuccess() {
    setSuccessIsShown(prev => !prev);
  }

  return (
    <>
      <FormModal modalIsOpen={jobModalIsShown} closeModal={toggleJobModal}>
        <JobForm
          data={form.jobForm}
          closeModal={toggleJobModal}
          showSuccess={toggleSuccess}
          title={back?.name}
          id={back?.id}
        />
      </FormModal>
      <SuccessModal
        data={form.jobForm.confirmation}
        successIsShown={successModalIsShown}
        closeSuccess={toggleSuccess}
      />
      <GreyContainer>
        <VacancyHeader
          data={data}
          back={back}
          toggleJobModal={toggleJobModal}
        />
      </GreyContainer>

      {content && (
        <Container>
          <ArticleContent
            content={content}
            isRelocation={back?.is_relocation}
          />
        </Container>
      )}
      <ConditionsSection>
        <Container>
          <Conditions data={data.conditions} />
        </Container>
      </ConditionsSection>
      <SliderSection>
        <SliderContainer>
          <SliderVacancy data={data.steps} isVacancyPage />
        </SliderContainer>
      </SliderSection>

      <Application
        data={data.application}
        decor
        vacancy
        toggleJobModal={toggleJobModal}
      />

      <OfficesMap data={data.map} english={back.is_english_speaking_team} />

      {back.recruiters?.length > 0 && (
        <Container>
          <Recruiters data={data.recruiters} back={back.recruiters} />
        </Container>
      )}

      {back.related?.lentgh > 0 && (
        <VacancySection>
          <Container>
            <Articles type="vacancy" data={back.related} />
          </Container>
        </VacancySection>
      )}
    </>
  );
};

export default Vacancy;
