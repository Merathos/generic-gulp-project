import { TeamsHeader, GreyFooter, ArticleContent } from 'components';
import { Container, GreyWrapper, Main } from './styles';

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

      <GreyFooter data={data.greyFooter} />
    </main>
  );
};

export default Project;
