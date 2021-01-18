import { Wrapper } from './styles';

const Section = ({ children, margin }) => {
  return <Wrapper margin={margin}>{children}</Wrapper>;
};

export default Section;
