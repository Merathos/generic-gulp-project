import { SpeakerCard } from 'components';
import * as S from './styles';

const Speakers = props => {
  const { speakersTitle, speakers } = props;

  return (
    <S.Section>
      <S.Container>
        <S.Title>{speakersTitle}</S.Title>
        <S.List>
          {speakers.map((el, i) => (
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
