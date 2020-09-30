import PropTypes from 'prop-types';
import NoteLeft from '/components/NoteLeft';
import NoteRight from '/components/NoteRight';
import { Advert } from 'components';
import { Container, Block, H2, AdvertsWrapper } from './styles';


const Articles = props => {
  const { data, type } = props;
  return (
    <Container>
      {type === 'article' ? (
        <>
          <NoteLeft data={data[0]} />
          <NoteRight data={data[1]} />
        </>
      ) : (
        <Block>
          <H2>{data.title}</H2>
          <AdvertsWrapper>
            <Advert data={data.catalog[0]} />
            <Advert data={data.catalog[1]} />
          </AdvertsWrapper>
        </Block>
      )}
    </Container>
  );
};

Articles.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string
};

export default Articles;
