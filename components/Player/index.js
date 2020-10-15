import { useRef, useState, useEffect } from 'react';
import * as S from './styles';

const fromSecToDuration = duration => {
  const min = Math.round(duration/60);
  let sec = Math.round(duration % 60);

  if  (sec < 10) {
    sec = '0' + sec;
  }

  return `${min}:${sec}`;
}

const Player = ({ src }) => {
  const refPlayer = useRef(null);
  const refProgress = useRef(null);
  const [pause, setPause] = useState(true);
  const [audioDuration, setAudioDuration] = useState(0);

  useEffect(() => {
    setAudioDuration(fromSecToDuration(refPlayer.current.duration));
  }, []);

  const playPlayer = () => {
    refPlayer.current.play();
    setPause(false);
  };

  const pausePlayer = () => {
    refPlayer.current.pause();
    setPause(true);
  };

  const handleUpdate = () => {
    refProgress.current.style.width = `${Math.round(177 / refPlayer.current.duration * refPlayer.current.currentTime)}px`;
    // setAudioDuration(Math.round(refPlayer.current.currentTime));
  };

  return (
    <>
      <audio
        ref={refPlayer}
        onTimeUpdate={() => handleUpdate()}
        >
        <source
          src={src}
          type="audio/mpeg"
        />
      </audio>
      <S.Block>
        <S.Button
          name={pause ? 20 : 38}
          onClick={() => (pause ? playPlayer() : pausePlayer())}
        />
        <S.Wrapper>
          {pause && <S.Label>Послушать рассказ</S.Label>}
          <S.Scale pause={pause}>
            <S.Bar>
              <S.Progress ref={refProgress} />
            </S.Bar>
          </S.Scale>
          <S.Span>{audioDuration}</S.Span>
        </S.Wrapper>
      </S.Block>
    </>
  );
};

export default Player;
