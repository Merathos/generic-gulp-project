import {
  Values,
  Application,
  InternVacancies,
  GreyHeader,
  GreyFooter,
  InternInfo,
  SliderVacancy,
  InternAbout,
  Slider
} from 'components';
import { SectionGroup } from 'containers';
import { Container, GreyContainer, GreyWrapper } from './styles';

const Internship = ({ data, vacancies }) => {
  return (
    <main>
      <GreyWrapper>
        <Container>
          <GreyHeader
            title={data.intro.title}
            text={data.intro.text}
            buttons={data.intro.buttons}
            picture={data.intro.picture} />
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
        <SectionGroup>
          <Values data={data.values} />
        </SectionGroup>
        <div />
      </Container>

      <GreyContainer>
        <Container>
          <SliderVacancy data={data.steps} background="#F7F8F9" />
        </Container>
      </GreyContainer>

      <Container>
        <SectionGroup>
          <InternVacancies mock={data.vacancies} back={vacancies} />
        </SectionGroup>
      </Container>

      <Application data={data.apply} />

      <GreyFooter data={data.greyFooter} background="transparent" />
    </main>
  );
};

export default Internship;
