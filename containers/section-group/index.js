import { Wrapper } from './styles';

const SectionGroup = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default SectionGroup;
