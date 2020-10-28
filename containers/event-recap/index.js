import * as S from './styles';
import { Media, MarkerList, Slider } from 'components';

const EventRecap = ({ data }) => {
  return (
    <S.Section id="recap-content">
      <S.Container>
        {data.map((topic, i) => (
          <S.TopicWrapper key={i}>
            <S.Topic>{topic.title}</S.Topic>
            <Media data={topic.video} hasCircle={true} />
            <S.Text>{topic.text}</S.Text>
            {topic.list && <MarkerList data={topic.list} />}
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
