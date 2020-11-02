import { Section, Text, VideoContainer } from './styles';
import ReactPlayer from 'react-player';

const Video = props => {
  const {
    data: { link, title }
  } = props;
  return (
    <Section>
        <VideoContainer>
          <ReactPlayer
            url={link}
            config={{
              youtube: {
                playerVars: {
                  showinfo: 1,
                  controls: 1,
                  autoplay: 0,
                },
              },
            }}
            className="react-player"
            width="100%"
            height="100%"
          />
        </VideoContainer>
      {title && <Text>{title}</Text>}
    </Section>
  );
};

export default Video;
