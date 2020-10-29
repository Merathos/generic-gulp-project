import { Section, Text, VideoContainer } from './styles';
import ReactPlayer from 'react-player';

const Media = props => {
  const {
    data: { subtitle, src, srcPoster, stream = false },
    type,
    decoration,
    hasCircle,
  } = props;
  return (
    <Section decoration={decoration} hasCircle={hasCircle}>
      {type === 'img' ? (
        <img
          src={`https://api.develop.dins.d.nimax.ru/${src.url}`}
          alt={subtitle}
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
    </Section>
  );
};

export default Media;
