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
import { SectionGroup } from 'containers';
import {
  Container,
  GreyContainer,
  GreyWrapper,
  ValuesSection,
  VacancySection,
  StyledApplication,
  GroupContainer,
} from './styles';

const Internship = ({ data, vacancies }) => {
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

      <Gallery data={data.gallery} />

      <ValuesSection>
        <Values data={data.values} />
      </ValuesSection>

      {/*<GreyContainer>*/}
      {/*  <Container>*/}
      {/*    <SliderVacancy data={data.steps} background="#F7F8F9" />*/}
      {/*  </Container>*/}
      {/*</GreyContainer>*/}

      {/*<VacancySection>*/}
      {/*  <Container>*/}
      {/*    <InternVacancies mock={data.vacancies} back={vacancies} />*/}
      {/*  </Container>*/}
      {/*</VacancySection>*/}

      {/*<StyledApplication data={data.apply} />*/}

      {/*<GreyFooter data={data.greyFooter} background="transparent" />*/}
    </main>
  );
};

export default Internship;
