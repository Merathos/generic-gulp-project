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
import { FormModal } from 'containers';
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

  function toggleJobModal() {
    setJobModalIsShown((prev) => !prev);
  }

  return (
    <>
      <FormModal
        modalIsOpen={jobModalIsShown}
        closeModal={toggleJobModal}
        successData={form.jobForm.confirmation}
      >
        <JobForm
          data={form.jobForm}
          closeModal={toggleJobModal}
          title={back?.name}
          id={back?.id}
        />
      </FormModal>
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
      {back.conditions?.length > 0 && (
        <ConditionsSection addMarginBottom={!back.stages?.length > 0}>
          <Container>
            <Conditions data={data.conditions} back={back.conditions} />
          </Container>
        </ConditionsSection>
      )}
      {back.stages?.length > 0 && (
        <SliderSection>
          <SliderContainer>
            <SliderVacancy data={data.steps} list={back.stages} isVacancyPage />
          </SliderContainer>
        </SliderSection>
      )}

      {!back.is_archive && (
        <Application
          data={data.application}
          decor
          vacancy
          toggleJobModal={toggleJobModal}
        />
      )}

      <OfficesMap data={data.map} english={back.is_english_speaking_team} />

      {back.recruiters?.length > 0 && (
        <Container>
          <Recruiters
            data={data.recruiters}
            back={back.recruiters}
            english={back.is_english_speaking_team}
          />
        </Container>
      )}

      {back.related?.length > 0 && (
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
