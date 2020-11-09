import { TeamsHeader, GreyFooter, ArticleContent } from 'components';
import { Container, GreyWrapper, Main } from './styles';

const Project = ({ data, teams }) => {
  const content = JSON.parse(teams.content);
  return (
    <main>
      <GreyWrapper>
        <Container>
          <TeamsHeader
            title={teams.name}
            text={teams.description}
            stack={teams.technology_stacks}
         //   picture={teams.detail_image.path.normal}
         />
        </Container>
      </GreyWrapper>

      <Container>
        {console.log(content)}
        {Object.keys(content).length !==0 && <ArticleContent content={content.blocks} />}
      </Container>

      <GreyFooter data={data.greyFooter} />
    </main>
  );
};

export default Project;
