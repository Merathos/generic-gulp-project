import { Styled, Span } from './styles';

const Icon = ({ name, className }) => (
  <Styled className={className}>
    <Span className={`ec ${name}`} />
  </Styled>
);

export default Icon;
