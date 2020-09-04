import {
  Values,
  Application,
  InternVacancies,
  GreyHeader,
  GreyFooter,
  InternInfo,
  SliderVacancy
} from 'components';
import { SectionGroup } from 'containers';
import { Container, GreyContainer } from './styles';

const Internship = ({ data, vacancies }) => {
  return (
    <main>
      <GreyContainer>
        <Container>
          <GreyHeader data={data.intro} />
        </Container>
      </GreyContainer>

      <Container>
        <SectionGroup>
          <InternInfo data={data.info} />
        </SectionGroup>
        <Values data={data.values} />
      </Container>

      <GreyContainer>
        <Container>
          <SliderVacancy data={data.steps} />
        </Container>
      </GreyContainer>
      <Container>
        <SectionGroup>
          <InternVacancies mock={data.vacancies} back={vacancies} />
        </SectionGroup>
      </Container>
      <Application data={data.apply} />

      <Container>
        <GreyFooter data={data.greyFooter} />
      </Container>
    </main>
  );
};

export default Internship;
