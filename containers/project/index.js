import {
  TeamsHeader,
  GreyFooter,
  ArticleContent,
  TeamsVacancies,
} from 'components';
import greyFooterMock from 'mock/greyFooter';

import {
  HeaderContainer,
  ContentContainer,
  GreyWrapper,
  VacancySection,
  VacancyContainer,
} from './styles';

const Project = ({ data, teams }) => {
  const content = JSON.parse(teams.content);
  const withBg = !teams.detail_image;

  return (
    <main>
      <GreyWrapper withBg={withBg}>
        <HeaderContainer>
          <TeamsHeader
            title={teams.name}
            text={teams.description}
            stack={teams.technology_stacks}
            picture={teams.detail_image}
          />
        </HeaderContainer>
      </GreyWrapper>

      <ContentContainer removeBottomMargin={teams.vacancies?.length > 0}>
        {Object.keys(content).length !== 0 && (
          <ArticleContent content={content.blocks} />
        )}
      </ContentContainer>

      {teams.vacancies?.length > 0 && (
        <VacancySection>
          <VacancyContainer>
            <TeamsVacancies
              data={data.vacancies}
              title={teams.name}
              list={teams.vacancies}
            />
          </VacancyContainer>
        </VacancySection>
      )}

      <GreyFooter data={greyFooterMock.greyFooter} />
    </main>
  );
};

export default Project;
