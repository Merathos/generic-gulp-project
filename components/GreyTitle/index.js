
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
      <H1>{title}</H1>
      <TextBlock>
        <Bold>{stackTitle}</Bold>
        <StyledText>{technologies}</StyledText>
      </TextBlock>
      <TextBlock>
        <Bold>{projectTitle}</Bold>
        <StyledText>{project}</StyledText>
      </TextBlock>
      <Container>
        <StyledButton type="accent">{button1}</StyledButton>
        <Button>{button2}</Button>
      </Container>
    </Section>
  );
};

export default GreyTitle;
