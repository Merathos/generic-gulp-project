import * as S from './styles';
import { Media, Slider } from 'components';

const EventRecap = ({ data, recap }) => {
  return (
    <S.Section id="recap-content" ref={recap}>
      <S.Container>
        {data.map((topic, i) => (
          <S.TopicWrapper key={i}>
            <S.Topic>{topic.title}</S.Topic>
            <Media data={topic.video} hasCircle={true} />
            <S.Text>{topic.text}</S.Text>
            {topic.list && <S.StyledMarkerList data={topic.list} />}
            {topic.photos && (
              <S.SliderContainer>
                <Slider
                  pictures={topic.photos}
                  hasControls={true}
                  isSmall={true}
                />
              </S.SliderContainer>
            )}
          </S.TopicWrapper>
        ))}
      </S.Container>
    </S.Section>
  );
};

export default EventRecap;
