import { Section, Text, VideoContainer } from './styles';
import ReactPlayer from 'react-player';

const Media = props => {
  const {
    data: { subtitle, src, srcPoster },
    type,
    decoration,
    hasCircle,
  } = props;
  return (
    <Section decoration={decoration} hasCircle={hasCircle}>
      {type === 'img' ? (
        <img src={src} alt={subtitle} />
      ) : (
        <VideoContainer>
          <ReactPlayer
            url={src}
            config={{
              youtube: {
                playerVars: { showinfo: 1, controls: 1, autoplay: 1 },
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
