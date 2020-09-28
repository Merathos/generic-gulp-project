import { Media, List, Quote, Slider, GreyFooter, BlogHeader } from 'components';
import { SectionGroup } from 'containers';
import { Container, GreyContainer, Wrapper } from './styles';

const Story = ({ data, back }) => {
  return (
    <main>
      <GreyContainer>
        <Container>
          <BlogHeader
            title={back.title}
            text={back.description}
            picture={back.detail.path.normal}
            audio={back.audio}
            mobPicture={back.detail_mobile && back.detail_mobile.path.normal}
          />
        </Container>
      </GreyContainer>

      <Container>
        <Wrapper>
          <SectionGroup>
            <Quote data={data.content.part1} />
            <Slider
              type="img"
              pictures={data.content.part1.pictures}
              subtitle={data.content.part1.subtitle}
            />
          </SectionGroup>
          <SectionGroup>
            <Quote data={data.content.part2} />
            <Media type="img" data={data.content.part2.picture} decoration />
          </SectionGroup>
          <SectionGroup>
            <Quote data={data.content.part3} />
            <List position="row" data={data.content.part3.noteWithPictures} />
          </SectionGroup>
          <SectionGroup>
            <Quote data={data.content.part4} />
          </SectionGroup>
        </Wrapper>
      </Container>

      <GreyContainer>
        <GreyFooter data={back.related} type="blog" />
      </GreyContainer>
    </main>
  );
};

export default Story;
