import * as S from './styles';
import { Media } from 'components';
import InnerHTML from 'dangerously-set-html-content';

const EventStream = props => {
  const {
    data: { title, msg, video },
  } = props;

  const chatFrame = `
  <iframe allowfullscreen="" frameborder="0" height="400px" src="https://www.youtube.com/live_chat?v=5qap5aO4i9A&embed_domain=localhost" width="100%"></iframe>
  `;

  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Msg>{msg}</S.Msg>
      </S.Container>
      <S.StreamWrapper>
        <Media data={video} hasCircle={true} stream={true} />
        <S.Chat>
          <InnerHTML html={chatFrame} />
        </S.Chat>
      </S.StreamWrapper>
    </S.Section>
  );
};

export default EventStream;
