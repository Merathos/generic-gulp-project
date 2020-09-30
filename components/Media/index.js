import { Section, Text } from './styles';

const Media = props => {
  const {
    data: { subtitle, src, srcPoster },
    type,
    decoration
  } = props;
  return (
    <Section decoration={decoration}>
      {type === 'img' ? (
        <img src={src} alt={subtitle} />
      ) : (
        <video poster={srcPoster}>
          <track kind="captions" src={src} />
        </video>
      )}
      <Text>{subtitle}</Text>
    </Section>
  );
};

export default Media;
