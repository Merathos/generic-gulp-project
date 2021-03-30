import { Media, Slider } from 'components';
import { Container } from 'elements';
import * as S from './styles';

const EventRecap = ({ data, recap }) => {
  return (
    <S.Section id="recap-content" ref={recap}>
      <Container>
        {data.map((topic, i) => (
          <S.TopicWrapper key={i}>
            <S.Topic>{topic.title}</S.Topic>
            <Media data={topic.video} hasCircle />
            <S.Text>{topic.text}</S.Text>
            {topic.list && <S.StyledMarkerList data={topic.list} />}
            {topic.photos && (
              <S.SliderContainer>
                <Slider pictures={topic.photos} hasControls isSmall />
              </S.SliderContainer>
            )}
          </S.TopicWrapper>
        ))}
      </Container>
    </S.Section>
  );
};

export default EventRecap;
