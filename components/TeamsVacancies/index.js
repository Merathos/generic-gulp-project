import { Advert } from 'components';
import { Block, H2, AdvertsWrapper } from './styles';

const TeamsVacancies = ({ data, title, list }) => {
  return (
    <Block>
      {title ? (
        <H2>{`${data.title} ${title.replace(/<br\s*\/?>/g, '')}`}</H2>
      ) : (
        <H2>{data.title}</H2>
      )}
      <AdvertsWrapper>
        {list.map(item => (
          <Advert data={item} key={item.id} />
        ))}
      </AdvertsWrapper>
    </Block>
  );
};

export default TeamsVacancies;
