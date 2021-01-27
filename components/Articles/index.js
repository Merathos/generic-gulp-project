import { useSelector } from 'react-redux';
import { NoteLeft, NoteRight, Advert } from 'components';
import { Container, Block, H2, AdvertsWrapper } from './styles';

const Articles = (props) => {
  const language = useSelector((state) => state.language);
  const { data, type } = props;

  return (
    <>
      {type === 'article' ? (
        <Container>
          {data[0] && <NoteLeft data={data[0]} />}
          {data[1] && <NoteRight data={data[1]} />}
        </Container>
      ) : (
        <Block>
          <H2>
            {language
              ? 'Vacancies in this category'
              : 'Вакансии в этой категории'}
          </H2>
          <AdvertsWrapper>
            {data[0] && <Advert data={data[0]} />}
            {data[1] && <Advert data={data[1]} />}
          </AdvertsWrapper>
        </Block>
      )}
    </>
  );
};

export default Articles;
