import * as S from './styles';
import { SpeakerCard } from 'components';

const Speakers = props => {
  const {
    data: { title, list },
  } = props;

  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.List>
          {list.map((el, i) => (
            <S.Item key={i}>
              <SpeakerCard data={el} />
            </S.Item>
          ))}
        </S.List>
      </S.Container>
    </S.Section>
  );
};

export default Speakers;
