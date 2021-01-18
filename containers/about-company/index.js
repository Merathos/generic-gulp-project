import { BenefitsList } from 'components';
import { Container, H2 } from './styles';

const title = 'О компании';

const AboutCompany = ({ data, banner }) => {
  return (
    <>
      <Container>
        <H2>{title}</H2>
        <BenefitsList data={data} banner={banner} />
      </Container>
    </>
  );
};

export default AboutCompany;
