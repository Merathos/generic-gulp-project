
import { Features } from 'components';
import { Button } from 'elements';
import {
  Section,
  Wrapper,
  H1,
  TextBlock,
  Bold,
  StyledText,
  StyledButton,
  Container
} from './styles';

const GreyTitle = ({ data }) => {
  const {
    features,
    title,
    stackTitle,
    technologies,
    projectTitle,
    project,
    button1,
    button2
  } = data;
  return (
    <Section>
      <Wrapper>
        <Features data={features} />
      </Wrapper>
      <H1 content={title} />
      <TextBlock>
        <Bold>{stackTitle}</Bold>
        <StyledText content={technologies} />
      </TextBlock>
      <TextBlock>
        <Bold>{projectTitle}</Bold>
        <StyledText content={project} />
      </TextBlock>
      <Container>
        <StyledButton type="accent" content={button1} />
        <Button content={button2} />
      </Container>
    </Section>
  );
};

export default GreyTitle;
