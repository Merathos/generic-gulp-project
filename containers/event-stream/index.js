import { Media } from 'components';
import * as S from './styles';

const EventStream = props => {
  const {
    data: { title, msg, video },
    code,
    domain,
  } = props;

  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Msg>{msg}</S.Msg>
      </S.Container>
      <S.StreamWrapper>
        <Media data={video} hasCircle stream stretched={true} />
        <S.Chat>
          <iframe
            title="Youtube chat"
            allowFullScreen=""
            height="400"
            src={`https://www.youtube.com/live_chat?v=${code}&embed_domain=${domain}`}
            width="1100"
          />
        </S.Chat>
      </S.StreamWrapper>
    </S.Section>
  );
};

export default EventStream;
