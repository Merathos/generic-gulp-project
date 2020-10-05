import ArrowRight from 'public/icons/arrow-right.svg';
import { BlogsCard } from 'components';
import * as S from './styles';

const GreyFooter = ({ data, type }) => {
  return (
    <S.Section>
      {type === 'blog' ? (
        <S.ListBlog>
          {data.map((el, i) => (
            <S.Card key={i}>
              <BlogsCard data={el} background="#fff" />
            </S.Card>
          ))}
        </S.ListBlog>
      ) : (
        <S.List>
          {data.map((el, i) => (
            <S.Element key={i}>
              <S.Title>{el.title}</S.Title>
              <S.Text>{el.text}</S.Text>
              <ArrowRight />
            </S.Element>
          ))}
        </S.List>
      )}
    </S.Section>
  );
};

export default GreyFooter;