import {
  GreyHeader,
  GreyFooter
} from 'components';
import { SectionGroup } from 'containers';
import { Container, GreyWrapper } from './styles';

const Project = ({ data, teams }) => {
  return (
    <main>
      <GreyWrapper>
        <Container>
          <GreyHeader title={teams.name} text={teams.description} />
        </Container>
      </GreyWrapper>

      <Container>
        <SectionGroup>{data.content}</SectionGroup>
      </Container>

      <GreyFooter data={data.greyFooter} />
    </main>
  );
};

export default Project;