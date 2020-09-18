import { useRef } from 'react';
import { Icon } from 'elements';
import * as S from './styles';

const Player = ({ src }) => {
  const ref = useRef(null);

  return (
    <>
      <audio ref={ref}>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
      </audio>
      <S.Block>
        <S.Button type="button" onClick={() => ref.current.play()}>
          <Icon name="ec-loud-sound" white />
        </S.Button>
        {/* <button type="button" onClick={() => ref.current.pause()}>Pause</button>  */}
        {/* <button type="button" onClick={() => ref.current.volume += 0.1">Vol +</button> */}
        <S.Wrapper>
          <span>Послушать рассказ</span>
          <span>6:13</span>
        </S.Wrapper>
        {/* <span>{Math.round(ref.current.duration / 60)}:{Math.round(ref.current.duration % 60)}</span> */}
      </S.Block>
    </>
  );
};

export default Player;
