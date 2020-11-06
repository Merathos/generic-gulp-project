import { Section, Description } from './styles';

const Paragraph = props => {
  const {
    data: { text },
    size,
    opacity,
    bold,
  } = props;
  return (
    <Section padding={size}>
      <Description
        bold={bold}
        opacity={opacity}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Section>
  );
};

export default Paragraph;
