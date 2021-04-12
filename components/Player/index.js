import ReactPlayer from 'react-player';
import { useRef, useState, useEffect } from 'react';
import { fromSecToDuration, restOfDuration } from 'helpers';
import * as S from './styles';

const Player = ({ src, isPaused, withDynamic = false }) => {
  const refPlayer = useRef(null);
  const refProgress = useRef(null);
  const [play, setPlay] = useState(false);
  const [isFirstClick, setFirstClick] = useState(false);
  const [initialDuration, setinitialDuration] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  const togglePlayer = () => {
    setPlay(!play);
    setFirstClick(true);
  };

  const handleUpdate = (e) => {
    refProgress.current.style.width = `${Math.round(152 * e.played)}px`;
    setAudioDuration(restOfDuration(audioDuration));
  };

  useEffect(() => {
    if (isPaused) {
      setPlay(false);
    }
  }, []);

  let iconName;

  if (!play && withDynamic && !isFirstClick) {
    iconName = 'speaker';
  } else if (!play && withDynamic && isFirstClick) {
    iconName = 'play-and-pause';
  } else if (play) {
    iconName = 'pause';
  } else if (!play && !withDynamic) {
    iconName = 'play';
  }

  return (
    <>
      <ReactPlayer
        type="audio/mpeg"
        playing={play}
        ref={refPlayer}
        url={src}
        width="0"
        height="0"
        onProgress={(e) => play && handleUpdate(e)}
        onDuration={(e) => {
          setinitialDuration(e);
          !play && setAudioDuration(e);
        }}
        onEnded={() => {
          setPlay(false);
          iconName = 'play';
          setAudioDuration(initialDuration);
          refProgress.current.style.width = `0px`;
        }}
      />
      <S.Block>
        <S.Button
          isSpeaker={iconName === 'speaker'}
          onClick={() => togglePlayer()}
          type="button"
          aria-label="Player's control button"
          withDynamic={withDynamic}
        >
          <S.Img
            src={`/emodzi/${iconName}.png`}
            width="60"
            height="60"
            alt={iconName}
          />
        </S.Button>
        <S.Wrapper>
          {!play && (!withDynamic || !isFirstClick) && (
            <S.Label withDynamic={withDynamic}>Послушать рассказ</S.Label>
          )}
          <S.Scale pause={!play} withDynamic={withDynamic && !isFirstClick}>
            <S.Bar>
              <S.Progress ref={refProgress} />
            </S.Bar>
          </S.Scale>
          <S.Span withDynamic={withDynamic}>
            {fromSecToDuration(audioDuration)}
          </S.Span>
        </S.Wrapper>
      </S.Block>
    </>
  );
};

export default Player;
