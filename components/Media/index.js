import { Section, Text, VideoContainer } from './styles';
import ReactPlayer from 'react-player';

const Media = props => {
  const {
    data: {
      subtitle,
      src,
      srcPoster,
      stream = false,
      caption,
      file,
      stretched,
    },
    type,
    decoration,
    hasCircle,
    isAbout = false,
  } = props;

  return (
    <Section
      decoration={decoration}
      hasCircle={hasCircle}
      stretched={stretched}
    >
      {type === 'img' ? (
        <img
          src={`https://api.develop.dins.d.nimax.ru/${file.url}`}
          alt={caption}
          width="200"
          height="100"
        />
      ) : (
        <VideoContainer isAbout={isAbout}>
          <ReactPlayer
            url={src}
            config={{
              youtube: {
                playerVars: {
                  showinfo: 1,
                  controls: 1,
                  autoplay: `${stream ? 0 : 1}`,
                },
              },
            }}
            light={
              srcPoster ||
              'https://api.develop.dins.d.nimax.ru//storage/images/zpQbYFjH42sG4nMjqID7ASCCbg9OGSV4IfiRIdzQ.jpeg'
            }
            className="react-player"
            width="100%"
            height="100%"
          />
        </VideoContainer>
      )}
      {subtitle && <Text>{subtitle}</Text>}
      {caption && <Text>{caption}</Text>}
    </Section>
  );
};

export default Media;
