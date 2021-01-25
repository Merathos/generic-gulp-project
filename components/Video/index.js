import ReactPlayer from 'react-player';
import { sanitize } from 'isomorphic-dompurify';
import { Section, Text, VideoContainer } from './styles';

const Video = props => {
  const {
    data: { link, title },
    recap,
  } = props;
  return (
    <Section ref={recap}>
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
          // light={
          //   'https://api.develop.dins.d.nimax.ru//storage/images/zpQbYFjH42sG4nMjqID7ASCCbg9OGSV4IfiRIdzQ.jpeg'
          // }
          className="react-player"
          width="100%"
          height="100%"
        />
      </VideoContainer>
      {title && <Text dangerouslySetInnerHTML={{ __html: sanitize(title) }} />}
    </Section>
  );
};

export default Video;
