import styled from 'styled-components';

const ArticleTitle = styled.h1`
  font-size: 84px;
  line-height: 86px;
`;

const Date = styled.span`
  font-size: 16px;
  line-height: 131%;
  opacity: 0.5;
`;

const Description = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 158%;
`;

const Title = ({ data }) => {
  const { title, date, description } = data
  return (
    <div className="main__special-offer special-offer">
      <ArticleTitle>{title}</ArticleTitle>
      <Date>
        {date}
      </Date>
      <Description>
        {description}
      </Description>
    </div>
  )
};

export default Title;
