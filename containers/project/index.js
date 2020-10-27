import { TeamsHeader, GreyFooter, ArticleContent } from 'components';
import { Container, GreyWrapper } from './styles';

const Project = ({ data, teams }) => {
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
        {/* <ArticleContent content={teams.content} /> */}
      </Container>

      <GreyFooter data={data.greyFooter} />
    </main>
  );
};

export default Project;
