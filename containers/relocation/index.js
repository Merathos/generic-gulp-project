import {
  Advantages,
  Application,
  Blogs,
  GreyHeader,
  GreyFooter,
} from 'components';
import { Map, SectionGroup } from 'containers';
import Router from 'next/router';
import { Main, Container, GreyContainer } from './styles';

const handleVacanciesClick = () => {
  Router.push({
    pathname: '/vacancies',
  }).then(() => window.scrollTo(0, 0));
};
const Relocation = ({ data, blogs }) => {
  return (
    <Main>
      <GreyContainer>
        <Container>
          <GreyHeader
            title={data.intro.title}
            text={data.intro.text}
            list={data.intro.list}
            picture={data.intro.picture}
            mobPicture={data.intro.mobPicture}
            hash="relocation"
            twoColumns
          />
        </Container>
      </GreyContainer>

      <Container>
        <SectionGroup>
          <Advantages data={data.advantages} />
        </SectionGroup>
      </Container>

      <Application
        data={data.promo}
        type="relocation"
        handleVacanciesClick={handleVacanciesClick}
      />

      <Container>
        <SectionGroup>
          <Blogs mock={data.blogs} back={blogs} />
        </SectionGroup>
        <SectionGroup>
          <Map data={data.map} />
        </SectionGroup>
      </Container>

      <GreyContainer>
        <GreyFooter data={data.greyFooter} type="relocation" />
      </GreyContainer>
    </Main>
  );
};

export default Relocation;
