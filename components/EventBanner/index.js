import { Container, Title, Date, EventButton } from './styles';

const BenefitsBanner = ({ data }) => {
  return (
    <Container>
      <Title>{data.name}</Title>
      <Date>{data.date}</Date>
      <EventButton type="accent">{data.buttonText}</EventButton>
    </Container>
  );
};

export default BenefitsBanner;
