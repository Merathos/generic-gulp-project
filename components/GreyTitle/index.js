import styled from 'styled-components';
import Subtitle from 'elements/Subtitle';
import TitleH1 from 'elements/TitleH1';
import Button from 'elements/Button';
import Text from 'elements/Text';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 0;
  margin-bottom: 160px;

  @media screen and (max-width: 420px) {
    padding: 110px 0 64px;
    max-width: 315px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 240px) {
    max-width: 280px;
  }
`;

const TextBlock = styled.p`
  max-width: 627px;
  margin-bottom: 20px;
`;

const Bold = styled.b`
  font-weight: 800;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 17px;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: 60px;

  @media screen and (max-width: 420px) {
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledSubtitle = styled(Subtitle)`
  margin-right: 20px;
`;

const StyledButton = styled(Button)`
  margin-right: 20px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const H1 = styled(TitleH1)`
  max-width: 870px;
`;

const StyledText = styled(Text)`
  display: inline;
`;

const GreyTitle = ({ data }) => {
  const {
    subtitle1,
    subtitle2,
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
        <StyledSubtitle content={subtitle1} />
        <Subtitle content={subtitle2} />
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
