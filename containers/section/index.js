import { Title, Wrapper } from './styles';

const Section = ({ children, title }) => {
  return (
    <Wrapper>
      <Title content={title} />
      {children}
    </Wrapper>
  );
};

export default Section;
