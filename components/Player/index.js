import ReactPlayer from 'react-player';
import { useRef, useState, useEffect } from 'react';
import { fromSecToDuration, restOfDuration } from 'helpers';
import * as S from './styles';

const Player = ({ src, isPaused, withDynamic = false }) => {
  const refPlayer = useRef(null);
  const refProgress = useRef(null);
  const [play, setPlay] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);

  const togglePlayer = () => {
    setPlay(!play);
  };

  const handleUpdate = e => {
    refProgress.current.style.width = `${Math.round(177 * e.played)}px`;
    setAudioDuration(restOfDuration(audioDuration));
  };

  useEffect(() => {
    if (isPaused) {
      setPlay(false);
    }
  });

  return (
    <>
      <ReactPlayer
        type="audio/mpeg"
        playing={play}
        ref={refPlayer}
        url={src}
        width="0"
        height="0"
        onProgress={e => play && handleUpdate(e)}
        onDuration={e => !play && setAudioDuration(e)}
      />
      <S.Block>
        <S.Button
          name={play ? 38 : withDynamic ? 30 : 20}
          onClick={() => togglePlayer()}
        />
        <S.Wrapper>
          {!play && (
            <S.Label withDynamic={withDynamic}>Послушать рассказ</S.Label>
          )}
          <S.Scale pause={!play}>
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
