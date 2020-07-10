import {
  GreyTitle,
  Paragraph,
  SidebarRelocation,
  Articles,
  SliderVacancy,
  SidebarSlider,
  Requirements,
  Conditions,
  Map,
  Application
} from 'components';
import { Container, Article, Grid, GreyContainer, Aside } from './styles';

const Vacancy = ({ data }) => {
  return (
    <>
      <GreyContainer>
        <GreyTitle data={data.mainTitle} />
      </GreyContainer>
      <Container>
        <Paragraph bold="700" data={data.intro} />
        <Grid>
          <Article>
            <Requirements type="ellipse" data={data.requirements} />
          </Article>
          <Aside>
            <SidebarSlider data={data.sidebarSlider} />
          </Aside>
        </Grid>
        <Grid>
          <Article>
            <Requirements type="number" data={data.extraRequirements} />
          </Article>
          <Aside>
            <SidebarRelocation data={data.sidebarArticle} />
          </Aside>
        </Grid>
        <Article>
          <Paragraph size="h2" data={data.qualifications} />
          <Conditions data={data.conditions} />
        </Article>
        <SliderVacancy data={data.steps} />
      </Container>
      <Application data={data.application} />
      <Container>
        <Map data={data.map} />
        <Articles type="vacancy" data={data.vacancies} />
      </Container>
    </>
  );
};

export default Vacancy;
