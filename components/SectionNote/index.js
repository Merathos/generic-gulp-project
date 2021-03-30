import { Icon } from 'elements';
import { sanitize } from 'isomorphic-dompurify';
import * as S from './styles';

const SectionNote = ({ data }) => {
  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;

  const renewedData = data.replace(
    emailRegExp,
    (email) => `<a href="mailto:${email}">${email}</a>`
  );

  return (
    <S.Section>
      <Icon name="26" />
      <S.Text dangerouslySetInnerHTML={{ __html: sanitize(renewedData) }} />
    </S.Section>
  );
};

export default SectionNote;
