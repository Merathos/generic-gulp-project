import { Cards, SidebarArticle } from 'components';
import { Search, Filter } from 'forms';
import { Container, Article, Grid, Title, Aside } from './styles';

const Catalog = ({ data }) => {
  return (
    <Container>
      <Grid>
        <Article>
          <Title content={data.mainTitle} />
          <Search data={data.search} />
          <Cards data={data.cards} />
        </Article>
        <Aside>
          <Filter data={data.filter} />
          <SidebarArticle type="button" data={data.article} />
        </Aside>
      </Grid>
    </Container>
  );
};

export default Catalog;
