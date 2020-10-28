import { Section, Text } from './styles';

const Media = props => {
  const {
    data: { caption: subtitle, file: src, srcPoster, stretched },
    type,
    decoration,
  } = props;
  return (
    <Section decoration={decoration} stretched={stretched}>
      {type === 'img' ? (
        <img
          src={`https://api.develop.dins.d.nimax.ru/${src.url}`}
          alt={subtitle}
        />
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
