import { useRef, useState } from 'react';
import { Icon } from 'elements';
import * as S from './styles';

const Player = ({ src }) => {
  const ref = useRef(null);
  const refProgress = useRef(null);
  const [pause, setPause] = useState(true);

  const playPlayer = () => {
    ref.current.play();
    setPause(false);
  };

  const pausePlayer = () => {
    ref.current.pause();
    setPause(true);
  };

  return (
    <>
      <audio
        ref={ref}
        onTimeUpdate={() =>
        refProgress.current.style.width = `${Math.round(177 / ref.current.duration  * ref.current.currentTime)}px`}>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
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
          <S.Span>6:13</S.Span>
        </S.Wrapper>
      </S.Block>
    </>
  );
};

export default Player;
