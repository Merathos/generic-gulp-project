import { Cards, SidebarArticle } from 'components';
import { Search, Filter } from 'forms';
import { Container, Article, Grid, Title, Aside } from './styles';

const Catalog = ({ data }) => {
  return (
    <Container>
      <Grid>
        <Aside>
          <Filter data={data.filter} />
          <SidebarArticle type="button" data={data.article} />
        </Aside>
        <Article>
          <Title content={data.mainTitle} />
          <Search data={data.search} />
        </Article>
        <Cards data={data.cards} />
      </Grid>
    </Container>
  );
};

export default Catalog;
