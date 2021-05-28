import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { sanitize } from 'isomorphic-dompurify';
import * as S from './styles';

const Title = ({ title, date, description }) => {
  return (
    <S.Wrapper>
      {title && (
        <S.ArticleTitle
          dangerouslySetInnerHTML={{
            __html: sanitize(title),
          }}
        />
      )}
      {date && (
        <S.Date>{`${dayjs(date).locale('ru').format('D MMM YYYY')}`}</S.Date>
      )}
      {description && (
        <S.Description
          dangerouslySetInnerHTML={{
            __html: sanitize(description),
          }}
        />
      )}
    </S.Wrapper>
  );
};

export default Title;
