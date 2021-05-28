import { useState } from 'react';
import * as S from './styles';

const SmartText = ({ text, length = 215, className }) => {
  const [showLess, setShowLess] = useState(true);

  if (text.length < length) {
    return <S.Text>{text}</S.Text>;
  }

  return (
    <S.Text className={className}>
      {showLess ? `${text.slice(0, length)}...` : text}&nbsp;
      <S.Button onClick={() => setShowLess(!showLess)} showLess={showLess}>
        {showLess ? 'Читать полностью' : 'Свернуть'}
        <S.Icon
          showLess={showLess}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.94922L5.94975 9.89897L10.8995 4.94922"
            stroke="#53B443"
            strokeWidth="2"
          />
        </S.Icon>
      </S.Button>
    </S.Text>
  );
};

export default SmartText;
