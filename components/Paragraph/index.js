import { Section, H3, H2, Description } from './styles';

const Paragraph = props => {
  const {
    data: { title, text },
    size,
    color,
    opacity,
    bold,
    margin
  } = props;
  return (
    <Section margin={margin} padding={size}>
      {title && (
        <>
          {size === 'h3' ? (
            <H3 content={title} color={color} />
          ) : (
            <H2 content={title} color={color} />
          )}
        </>
      )}
      <Description bold={bold} opacity={opacity}>
        {text}
      </Description>
    </Section>
  );
};

export default Paragraph;
