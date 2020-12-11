import { MarkerList, PortraitSlider } from 'components';
import Btn from '../../elements/Btn';
import * as S from './styles';

const Intro = ({ data, quotes }) => {
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
      {quotes?.length > 0 && (
        <S.PortraitBlock>
          <PortraitSlider quotes={quotes} />
        </S.PortraitBlock>
      )}
    </S.Container>
  );
};

export default Intro;
