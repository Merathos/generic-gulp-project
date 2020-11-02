import { MarkerList, PortraitSlider } from 'components';
import Btn from '../../elements/Btn';
import * as S from './styles';

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
        <S.Button accent="accent">{data.buttonText}</S.Button>
      </S.TextBlock>
      <S.PortraitBlock>
        <PortraitSlider pictures={data.portraits} />
      </S.PortraitBlock>
    </S.Container>
  );
};

export default Intro;
