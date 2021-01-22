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
  Container,
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
        <Container>
          <InternshipHeader
            title={data.intro.title}
            text={data.intro.text}
            buttons={data.intro.buttons}
            picture={data.intro.picture}
            mobPicture={data.intro.mobPicture}
            size={data.intro.size}
          />
        </Container>
      </GreyWrapper>

      <Container>
        <GroupContainer>
          <InternInfo data={data.info} />
        </GroupContainer>
        <GroupContainer>
          <InternAbout data={data.about} />
        </GroupContainer>
      </Container>

      <Gallery title={data.gallery.title} subtitle={data.gallery.subtitle} />

      <ValuesSection>
        <Container>
          <Values data={data.values} />
        </Container>
      </ValuesSection>

      <GreyContainer>
        <Container>
          <SliderVacancy data={data.steps} list={data.steps.list} />
        </Container>
      </GreyContainer>

      {vacanciesData?.length > 0 && (
        <VacancySection>
          <Container>
            <InternVacancies mock={data.vacancies} data={vacanciesData} />
          </Container>
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
