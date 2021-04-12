import { useState } from 'react';
import * as S from './styles';

const CookieMessage = ({ data, setCookieAccepted }) => {
  const [startTransition, setStartTransition] = useState();

  const transition = () => {
    setTimeout(() => {
      setCookieAccepted(true);
    }, 1000);
  };

  const handleClick = () => {
    setStartTransition(true);
    localStorage.setItem('cookie_accepted', true);
    transition();
  };

  return (
    <S.Container startTransition={startTransition}>
      <S.Wrapper>
        <S.Title>{data.title}</S.Title>
        <S.BottomWrapper>
          <S.Button onClick={handleClick}>{data.buttonText}</S.Button>
          <S.Description>{data.description}</S.Description>
        </S.BottomWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default CookieMessage;
