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
import { SectionGroup } from 'containers';
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
            <SectionGroup>
              <Requirements type="ellipse" data={data.requirements} />
            </SectionGroup>
            <SectionGroup>
              <Requirements type="number" data={data.extraRequirements} />
            </SectionGroup>
            <Paragraph size="h2" data={data.qualifications} />
            <SectionGroup>
              <Conditions data={data.conditions} />
            </SectionGroup>
          </Article>
          <Aside>
            <SidebarSlider data={data.sidebarSlider} />
            <SidebarRelocation data={data.sidebarArticle} />
          </Aside>
        </Grid>

        <SectionGroup>
          <SliderVacancy data={data.steps} />
        </SectionGroup>
      </Container>

      <Application data={data.application} />

      <Container>
        <SectionGroup>
          <Map data={data.map} />
        </SectionGroup>
        <SectionGroup>
          <Articles type="vacancy" data={data.vacancies} />
        </SectionGroup>       
      </Container>
    </>
  );
};

export default Vacancy;
