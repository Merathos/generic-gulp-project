import ReactPlayer from 'react-player';
import { useRef, useState } from 'react';
import { fromSecToDuration, restOfDuration } from 'helpers';
import * as S from './styles';

const Player = ({ src }) => {
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
        <S.Button name={play ? 38 : 20} onClick={() => togglePlayer()} />
        <S.Wrapper>
          {!play && <S.Label>Послушать рассказ</S.Label>}
          <S.Scale pause={!play}>
            <S.Bar>
              <S.Progress ref={refProgress} />
            </S.Bar>
          </S.Scale>
          <S.Span>{fromSecToDuration(audioDuration)}</S.Span>
        </S.Wrapper>
      </S.Block>
    </>
  );
};

export default Player;
