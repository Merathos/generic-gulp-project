import mock from 'mock/404';
import Img404 from 'public/images/404.svg';
import { useRouter } from 'next/router';
import * as S from './styles';

const Page404 = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/').then(() => window.scrollTo(0, 0));
  };

  return (
    <S.Wrapper>
      <Img404 />
      <S.Text>{mock.text}</S.Text>
      <S.Description>{mock.description}</S.Description>
      <S.Button accent onClick={handleClick}>
        {mock.buttonText}
      </S.Button>
    </S.Wrapper>
  );
};

export default Page404;
