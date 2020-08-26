import { Styled, Span } from './styles';

const Icon = ({ name, className, white }) => (
  <Styled className={className} white={white}>
    <Span className={`ec ${name}`} />
  </Styled>
);

export default Icon;
