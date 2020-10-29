import { Media } from 'components';
// import InnerHTML from 'dangerously-set-html-content';
import * as S from './styles';

const EventStream = props => {
  const {
    data: { title, msg, video },
    code,
    domain,
  } = props;

  // const chatFrame = `
  // <iframe allowfullscreen="" frameborder="0" height="400px" src="https://www.youtube.com/live_chat?v=${code}&embed_domain=${domain}" width="100%"></iframe>
  // `;

  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Msg>{msg}</S.Msg>
      </S.Container>
      <S.StreamWrapper>
        <Media data={video} hasCircle stream />
        <S.Chat>
          {/* <InnerHTML html={chatFrame} /> */}
          <iframe
            allowFullScreen=""
            frameBorder="0"
            height="400px"
            src={`https://www.youtube.com/live_chat?v=${code}&embed_domain=${domain}`}
            width="100%"
          />
        </S.Chat>
      </S.StreamWrapper>
    </S.Section>
  );
};

export default EventStream;
