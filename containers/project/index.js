import {
  TeamsHeader,
  GreyFooter,
  ArticleContent,
  TeamsVacancies,
} from 'components';

import { Container, GreyWrapper, VacancySection } from './styles';

const Project = ({ data, teams }) => {
  const content = JSON.parse(teams.content);
  const withBg = !teams.detail_image;

  return (
    <main>
      <GreyWrapper withBg={withBg}>
        <Container>
          <TeamsHeader
            title={teams.name}
            text={teams.description}
            stack={teams.technology_stacks}
            picture={teams.detail_image}
          />
        </Container>
      </GreyWrapper>

      <Container>
        {Object.keys(content).length !== 0 && (
          <ArticleContent content={content.blocks} />
        )}
      </Container>

      {teams.vacancies?.length > 0 && (
        <VacancySection>
          <Container>
            <TeamsVacancies
              data={data.vacancies}
              title={teams.name}
              list={teams.vacancies}
            />
          </Container>
        </VacancySection>
      )}

      <GreyFooter data={data.greyFooter} />
    </main>
  );
};

export default Project;
