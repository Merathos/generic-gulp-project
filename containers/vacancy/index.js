import {
  VacancyHeader,
  Paragraph,
  SidebarRelocation,
  Articles,
  SliderVacancy,
  SidebarSlider,
  Requirements,
  Conditions,
  Map,
  Application,
  ArticleContent
} from 'components';
import { SectionGroup } from 'containers';
import { Container, Article, Grid, GreyContainer, Aside } from './styles';

const Vacancy = ({ data, back }) => {
  const content = JSON.parse(back.content);
 // console.log(content);
  return (
    <>
      <GreyContainer>
        <VacancyHeader data={back} />
      </GreyContainer>

      <Container>
       <ArticleContent content={content} />
        {/* <Paragraph bold="700" data={{ text: content[0].data.text }} />
        <Grid>
          <Article>
            <SectionGroup>
              <Requirements
                type="ellipse"
                data={{
                  title: content[1].data.text,
                  list: content[2].data.items
                }}
              />
            </SectionGroup>
            <SectionGroup>
              <Requirements
                type="number"
                data={{
                  title: content[3].data.text,
                  list: content[4].data.items
                }}
              />
            </SectionGroup>
            <SectionGroup>
              <Paragraph size="h2" data={data.qualifications} />
            </SectionGroup>
            <SectionGroup>
              <Conditions data={data.conditions} />
            </SectionGroup>
          </Article>
          <Aside>
            <SidebarSlider data={data.sidebarSlider} />
            <SidebarRelocation data={data.sidebarArticle} />
          </Aside>
        </Grid>

        <SliderVacancy data={data.steps} /> */}
      </Container>

      <Application data={data.application} decor />

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
