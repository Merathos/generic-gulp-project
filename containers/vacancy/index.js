import {
  VacancyHeader,
  Articles,
  Application,
  ArticleContent,
  Recruiters,
  OfficesMap,
} from 'components';
import { SectionGroup } from 'containers';
import { Container, GreyContainer } from './styles';

const Vacancy = ({ data, back }) => {
  const content = JSON.parse(back.content);
  return (
    <>
      <GreyContainer>
        <VacancyHeader data={back} />
      </GreyContainer>

      <Container>
        <ArticleContent content={content} />
      </Container>

      <Application data={data.application} decor />

      <Container>
        <SectionGroup>
          <Recruiters data={data.recruiters} back={back.recruiters} decor />
        </SectionGroup>
      </Container>
      <OfficesMap data={data.map} />
      <Container>
        <SectionGroup>
          <Articles type="vacancy" data={data.vacancies} />
        </SectionGroup>
      </Container>
    </>
  );
};

export default Vacancy;
