import styled from 'styled-components';
import TitleH2 from 'elements/TitleH2';
import Button from 'elements/Button';

const Section = styled.section`
  background-color: #F7F8F9;
  margin-bottom: 160px;
  padding: 160px 0 180px;
  background-image: url('backgrounds/application.png');
  background-repeat: no-repeat;
  background-position: 105% center;

  @media screen and (max-width: 420px) {
    margin-bottom: 80px;
    padding: 80px 0 80px;
    background-size: 50%;
    background-position: 150% center;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 315px;
  }

  @media screen and (max-width: 240px) {
    max-width: 280px;
  }
`;

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledButton = styled(Button)`
  margin-right: 20px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const H2 = styled(TitleH2)`
  max-width: 520px;
  margin-bottom: 80px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const Application = ({ data }) => {
  const {
    title,
    button1,
    button2
  } = data;
  return (
    <Section>
      <Wrapper>
        <H2 content={title} />
        <Container>
          <StyledButton type="accent" content={button1} />
          <Button content={button2} />
        </Container>
      </Wrapper>
    </Section>
  );
};

export default Application;
