import { Container, H2, SliderWrapper } from './styles';
import { BenefitsList, Slider } from 'components';

const title = 'О компании';

const AboutCompany = ({ data }) => {
  return (
    <Container>
      <H2>{title}</H2>
      <BenefitsList data={data} />
      <SliderWrapper>
        <Slider pictures={data.pictures} hasControls={true} />
      </SliderWrapper>
    </Container>
  );
};

export default AboutCompany;
