import {
  Values,
  Application,
  InternVacancies,
  GreyHeader,
  GreyFooter,
  InternInfo,
  SliderVacancy,
  InternAbout,
  Slider,
} from 'components';
import { SectionGroup } from 'containers';
import {
  Container,
  GreyContainer,
  GreyWrapper,
  ValuesSection,
  VacancySection,
  StyledApplication,
} from './styles';

const Internship = ({ data, vacancies }) => {
  return (
    <main>
      <GreyWrapper>
        <Container>
          <GreyHeader
            title={data.intro.title}
            text={data.intro.text}
            buttons={data.intro.buttons}
            picture={data.intro.picture}
          />
        </Container>
      </GreyWrapper>

      <Container>
        <SectionGroup>
          <InternInfo data={data.info} />
        </SectionGroup>
        <SectionGroup>
          <InternAbout data={data.about} />
        </SectionGroup>
        <SectionGroup>
          <Slider pictures={data.pictures} />
        </SectionGroup>
      </Container>
      <ValuesSection>
        <Container>
          <Values data={data.values} />
        </Container>
      </ValuesSection>

      <GreyContainer>
        <Container>
          <SliderVacancy data={data.steps} background="#F7F8F9" />
        </Container>
      </GreyContainer>

      <VacancySection>
        <Container>
          <InternVacancies mock={data.vacancies} back={vacancies} />
        </Container>
      </VacancySection>

      <StyledApplication data={data.apply} />

      <GreyFooter data={data.greyFooter} background="transparent" />
    </main>
  );
};

export default Internship;
