import MarkerList from '../../components/MarkerList';
import Button from '../../elements/Button';
import * as S from './styles';
import PortraitSlider from '../../components/PortraitSlider';

const Intro = ({ data }) => {
  return (
    <S.Container>
      <S.TextBlock>
        <S.Title>{data.title}</S.Title>
        <S.Text>{data.text}</S.Text>
        <S.ListBlock>
          <MarkerList
            type="ellipse"
            inline="true"
            data={data.communicationsList}
          />
        </S.ListBlock>
        <Button type="accent" behavior="disappear">
          {data.buttonText}
        </Button>
      </S.TextBlock>
      <S.PortraitBlock>
        <PortraitSlider pictures={data.portraits} />
      </S.PortraitBlock>
    </S.Container>
  );
};

export default Intro;
