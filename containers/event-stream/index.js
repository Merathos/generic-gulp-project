import * as S from './styles';
import { Media } from 'components';

const EventStream = props => {
  const {
    data: { title, msg, video },
  } = props;

  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Msg>{msg}</S.Msg>
      </S.Container>
      <S.StreamWrapper>
        <Media data={video} />
        <S.Chat></S.Chat>
      </S.StreamWrapper>
    </S.Section>
  );
};

export default EventStream;
