import { Title, Wrapper } from './styles';

const Section = ({ children, margin }) => {
  return (
    <Wrapper margin={margin}>
      {children}
    </Wrapper>
  );s
};

export default Section;
