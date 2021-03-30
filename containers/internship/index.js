import {
  Values,
  InternVacancies,
  InternshipHeader,
  GreyFooter,
  InternInfo,
  SliderVacancy,
  InternAbout,
  Gallery,
} from 'components';
import greyFooterMock from 'mock/greyFooter';
import {
  StyledContainer,
  GreyContainer,
  GreyWrapper,
  ValuesSection,
  VacancySection,
  ApplicationSection,
  GroupContainer,
} from './styles';

const Internship = ({ data, vacanciesData }) => {
  return (
    <main>
      <GreyWrapper withPicture={!!data.intro.picture}>
        <StyledContainer>
          <InternshipHeader
            title={data.intro.title}
            text={data.intro.text}
            buttons={data.intro.buttons}
            picture={data.intro.picture}
            mobPicture={data.intro.mobPicture}
            size={data.intro.size}
          />
        </StyledContainer>
      </GreyWrapper>

      <StyledContainer>
        <GroupContainer>
          <InternInfo data={data.info} />
        </GroupContainer>
        <GroupContainer>
          <InternAbout data={data.about} />
        </GroupContainer>
      </StyledContainer>

      <Gallery title={data.gallery.title} subtitle={data.gallery.subtitle} />

      <ValuesSection>
        <StyledContainer>
          <Values data={data.values} />
        </StyledContainer>
      </ValuesSection>

      <GreyContainer>
        <StyledContainer>
          <SliderVacancy data={data.steps} list={data.steps.list} />
        </StyledContainer>
      </GreyContainer>

      {vacanciesData?.length > 0 && (
        <VacancySection>
          <StyledContainer>
            <InternVacancies mock={data.vacancies} data={vacanciesData} />
          </StyledContainer>
        </VacancySection>
      )}

      <ApplicationSection data={data.apply} />

      <GreyFooter
        data={greyFooterMock.greyFooter}
        background="transparent"
        type="internship"
      />
    </main>
  );
};

export default Internship;
