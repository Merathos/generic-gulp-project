import { Section, Text, VideoContainer } from './styles';
import ReactPlayer from 'react-player';

const Media = props => {
  const {
    data: { subtitle, src, srcPoster, stream = false, caption, file },
    type,
    decoration,
    hasCircle,
    stretched,
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
        />
      ) : (
        <VideoContainer>
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
            light={srcPoster}
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
