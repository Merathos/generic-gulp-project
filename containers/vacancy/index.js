import {
  VacancyHeader,
  Articles,
  Map,
  Application,
  ArticleContent,
} from 'components';
import { SectionGroup } from 'containers';
import { Container, Article, Grid, GreyContainer, Aside } from './styles';

const Vacancy = ({ data, back }) => {
  const content = JSON.parse(back.content);
  return (
    <>
      <GreyContainer>
        <VacancyHeader data={back} />
      </GreyContainer>

      <Container>
        {console.log(content)}
        <ArticleContent content={content} />
      </Container>

      <Application data={data.application} decor />

      <Container>
        <SectionGroup>
          <Map data={data.map} />
        </SectionGroup>
        <SectionGroup>
          <Articles type="vacancy" data={data.vacancies} />
        </SectionGroup>
      </Container>
    </>
  );
};

export default Vacancy;
