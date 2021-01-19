import styled from 'styled-components';
import Subtitle from 'elements/Subtitle';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const ArticleTitle = styled.h1`
  font-size: 84px;
  line-height: 86px;
  margin-bottom: 50px;
  padding-top: 200px;

  @media screen and (max-width: 768px) {
    font-size: 54px;
    line-height: 60px;
  }

  @media screen and (max-width: 420px) {
    font-size: 32px;
    line-height: 31px;
    margin-bottom: 50px;
    padding-top: 110px;
  }
`;

const Date = styled(Subtitle)`
  margin-bottom: 80px;

  @media screen and (max-width: 420px) {
    margin-bottom: 40px;
  }
`;

const Description = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 158%;
  max-width: 854px;
  margin-bottom: 160px;

  @media screen and (max-width: 768px) {
    margin-bottom: 120px;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 80px;
    font-size: 16px;
    line-height: 158%;
  }
`;

const Title = ({ title, date, description }) => {
  return (
    <div>
      {title && (
        <ArticleTitle
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      )}
      {date && (
        <Date>{`${dayjs(date)
          .locale('ru')
          .format('D MMM YYYY')}`}</Date>
      )}
      {description && <Description>{description}</Description>}
    </div>
  );
};

export default Title;
