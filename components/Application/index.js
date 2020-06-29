import styled from 'styled-components';
import Subtitle from 'elements/Subtitle';
import TitleH1 from 'elements/TitleH1';
import Button from 'elements/Button';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 0;
  margin-bottom: 160px;

  @media screen and (max-width: 420px) {
    padding-top: 60px;
    max-width: 315px;
  }

  @media screen and (max-width: 240px) {
    max-width: 280px;
  }
`;

const Text = styled.p`
  max-width: 627px;
  margin-bottom: 20px;

  /* @media screen and (max-width: 420px) {
    margin-bottom: 40px ;
  } */
`;

const Bold = styled.b`
  font-weight: 800;

  /* @media screen and (max-width: 420px) {
    margin-bottom: 40px ;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 17px;

  /* @media screen and (max-width: 420px) {
    margin-bottom: 40px ;
  } */
`;

const Container = styled.div`
  display: flex;
  margin-top: 60px;

  /* @media screen and (max-width: 420px) {
    margin-bottom: 40px ;
  } */
`;

const StyledSubtitle = styled(Subtitle)`
  margin-right: 20px;

  /* @media screen and (max-width: 420px) {
    margin-bottom: 80px;
    font-size: 16px;
    line-height: 158%;
  } */
`;

const StyledButton = styled(Button)`
  margin-right: 20px;
`;

const Application = ({ data }) => {
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
      <TitleH1 content={title} />
      <Text>
        <Bold>{stackTitle}</Bold>
        {technologies}
      </Text>
      <Text>
        <Bold>{projectTitle}</Bold>
        {project}
      </Text>
      <Container>
        <StyledButton type="accent" content={button1} />
        <Button content={button2} />
      </Container>
    </Section>
  );
};

export default Application;
