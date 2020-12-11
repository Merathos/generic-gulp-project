import { BenefitsList, Slider } from 'components';
import { Container, H2, SliderWrapper } from './styles';

const title = 'О компании';

const AboutCompany = ({ data, banner }) => {
  return (
    <Container>
      <H2>{title}</H2>
      <BenefitsList data={data} banner={banner} />
      <SliderWrapper>
        <Slider pictures={data.pictures} hasControls />
      </SliderWrapper>
    </Container>
  );
};

export default AboutCompany;
