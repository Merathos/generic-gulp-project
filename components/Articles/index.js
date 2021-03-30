import { useSelector } from 'react-redux';
import { NoteLeft, NoteRight, Advert } from 'components';
import * as S from './styles';

const Articles = (props) => {
  const language = useSelector((state) => state.language);
  const { data, type } = props;

  return (
    <>
      {type === 'article' ? (
        <S.Container>
          {data[0] && <NoteLeft data={data[0]} />}
          {data[1] && <NoteRight data={data[1]} />}
        </S.Container>
      ) : (
        <S.Block>
          <S.H2>
            {language
              ? 'Vacancies in this category'
              : 'Вакансии в этой категории'}
          </S.H2>
          <S.AdvertsWrapper>
            {data[0] && <Advert data={data[0]} />}
            {data[1] && <Advert data={data[1]} />}
          </S.AdvertsWrapper>
        </S.Block>
      )}
    </>
  );
};

export default Articles;
