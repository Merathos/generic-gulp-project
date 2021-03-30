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
  SocialShare,
} from 'components';
import { FormModal } from 'containers';
import { useState } from 'react';
import form from 'mock/forms';
import {
  StyledContainer,
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
          english={back.is_english_speaking_team && back.is_translate}
        />
      </FormModal>
      <GreyContainer>
        <VacancyHeader
          data={data}
          back={back}
          toggleJobModal={toggleJobModal}
        />
      </GreyContainer>
      <main>
        {content && (
          <StyledContainer>
            <ArticleContent
              content={content}
              isRelocation={back?.is_relocation}
            />
          </StyledContainer>
        )}
        {back.conditions?.length > 0 && (
          <ConditionsSection
            whiteSpaceBottom={
              back.conditions?.length > 0 && back.stages?.length > 0
            }
          >
            <StyledContainer>
              <Conditions data={data.conditions} back={back.conditions} />
            </StyledContainer>
          </ConditionsSection>
        )}
        {back.stages?.length > 0 && (
          <SliderSection>
            <SliderContainer>
              <SliderVacancy
                data={data.steps}
                list={back.stages}
                isVacancyPage
              />
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

        <OfficesMap
          data={data.map}
          english={back.is_english_speaking_team && back.is_translate}
          removeMarginBottom={back.recruiters?.length < 1}
        />
        {back.recruiters?.length > 0 && (
          <StyledContainer noMarginBottomMobile>
            <Recruiters data={data.recruiters} back={back.recruiters} />
          </StyledContainer>
        )}
      </main>
      <SocialShare />
      {back.related?.length > 0 && (
        <VacancySection>
          <StyledContainer noMarginBottom>
            <Articles type="vacancy" data={back.related} />
          </StyledContainer>
        </VacancySection>
      )}
    </>
  );
};

export default Vacancy;
