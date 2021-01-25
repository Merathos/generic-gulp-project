import Mail from 'public//icons/mail.svg';
import Telegram from 'public/icons/telegram.svg';
import { sanitize } from 'isomorphic-dompurify';
import * as S from './styles';

const Recruiters = ({ data, back, english }) => {
  const { text, textEn, title, titleEn } = data;

  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  let updatedText;

  if (english && textEn) {
    updatedText = textEn.replace(
      emailRegExp,
      email => `<a href="mailto:${email}">${email}</a>`
    );
  } else if (text) {
    updatedText = text.replace(
      emailRegExp,
      email => `<a href="mailto:${email}">${email}</a>`
    );
  }

  return (
    <S.Section>
      <S.H2>{english ? titleEn : title}</S.H2>
      {updatedText && (
        <S.Text dangerouslySetInnerHTML={{ __html: sanitize(updatedText) }} />
      )}
      <S.List>
        {back.map((el, i) => (
          <S.Element key={i}>
            <S.Clip>
              <S.Picture
                src={el.image.path.normal}
                alt={el.name}
                width="200"
                height="100"
              />
            </S.Clip>
            <S.H3>{el.name}</S.H3>
            <S.Subtitle>
              <Mail />
              <a href={`mailto:${el.email}`}>{el.email}</a>
            </S.Subtitle>
            <S.Subtitle>
              <Telegram />
              <a
                href={`https://t.me/${el.telegram.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
              >
                {el.telegram}
              </a>
            </S.Subtitle>
          </S.Element>
        ))}
      </S.List>
    </S.Section>
  );
};

export default Recruiters;
