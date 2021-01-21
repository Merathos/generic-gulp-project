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
      <S.Title>{data.title}</S.Title>
      <S.Description>{data.description}</S.Description>
      <S.Button onClick={handleClick}>{data.buttonText}</S.Button>
    </S.Container>
  );
};

export default CookieMessage;
