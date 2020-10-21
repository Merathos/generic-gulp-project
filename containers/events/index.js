import { Main, Container, Grid, Aside, Title, ContentWrapper, Tags } from "./styles";
import { EventsFilter } from 'forms';

const Events = ({data}) => {
  return (
    <Main>
      <Container>
        <Grid>
          <Aside>
            <EventsFilter data={data} />
          </Aside>
          <ContentWrapper>
            <Title>{data.mainTitle}</Title>
            {/* <Tags><li>Some tag</li></Tags> */}
          </ContentWrapper>
        </Grid>
      </Container>
    </Main>
    );
};

export default Events;
