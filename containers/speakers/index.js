import { SpeakerCard } from 'components';
import * as S from './styles';

const Speakers = (props) => {
  const { speakersTitle, programs } = props;

  return (
    <S.Section>
      <S.StyledContainer>
        <S.Title>{speakersTitle}</S.Title>
        <S.List>
          {programs.map((program) => {
            if (!program?.speaker) return null;
            return (
              <S.Item key={program.id}>
                <SpeakerCard data={program.speaker} />
              </S.Item>
            );
          })}
        </S.List>
      </S.StyledContainer>
    </S.Section>
  );
};

export default Speakers;
