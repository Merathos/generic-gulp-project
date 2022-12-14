import ReactPlayer from 'react-player';
import { useState } from 'react';
import { sanitize } from 'isomorphic-dompurify';
import { Section, Text, VideoContainer } from './styles';

const Media = ({
  data: { subtitle, caption, file, stretched },
  type,
  decoration,
  hasCircle,
  autoplay,
  srcPoster,
  isAbout = false,
  code,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Section
      decoration={decoration}
      hasCircle={hasCircle}
      stretched={stretched}
      caption={caption}
    >
      {type === 'img' ? (
        <img
          src={`${process.env.NEXT_PUBLIC_API_STORAGE}${file.url}`}
          alt={caption}
          width="200"
          height="100"
        />
      ) : (
        <>
          {code && (
            <VideoContainer isAbout={isAbout}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${code}`}
                config={{
                  youtube: {
                    playerVars: {
                      showinfo: 1,
                      controls: 1,
                      autoplay: `${autoplay ? 1 : 0}`,
                    },
                  },
                }}
                light={srcPoster}
                className="react-player"
                width="100%"
                height="100%"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                playing={isPlaying}
              />
            </VideoContainer>
          )}
        </>
      )}
      {subtitle && (
        <Text dangerouslySetInnerHTML={{ __html: sanitize(subtitle) }} />
      )}
      {caption && (
        <Text dangerouslySetInnerHTML={{ __html: sanitize(caption) }} />
      )}
    </Section>
  );
};

export default Media;
