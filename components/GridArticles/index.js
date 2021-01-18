import Link from 'next/link';
import { BlogsCard, ArticleCard } from 'components';
import * as S from './styles';

const GridArticles = ({ articles }) => (
  <>
    <S.List>
      {articles.map((el, i) => (
        <S.Item key={i}>
          {el.is_highlight === true && (
            <Link href={`articles/${el.slug}`}>
              <S.Main background="#F7F8F9">
                <div>
                  <S.Title>{el.title}</S.Title>
                  <S.Text>{el.summary}</S.Text>
                </div>
                <S.Picture
                  src={el.highlight_image.path.normal}
                  alt={el.title}
                />
              </S.Main>
            </Link>
          )}
          {el.type === 'history' && el.is_highlight === false && (
            <BlogsCard data={el} background="#F7F8F9" />
          )}
          {el.type !== 'history' && el.is_highlight === false && (
            <ArticleCard data={el} />
          )}
        </S.Item>
      ))}
    </S.List>
  </>
);

export default GridArticles;
