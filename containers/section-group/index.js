import { Title, Wrapper } from './styles';

const SectionGroup = ({ children }) => {
  return (
    <Wrapper>
      {/* <Title content={title} /> */}
      {children}
    </Wrapper>
  );
};

export default SectionGroup;
