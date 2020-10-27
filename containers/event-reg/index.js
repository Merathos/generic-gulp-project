import * as S from './styles';
import { useEffect } from 'react';

const EventReg = props => {
  useEffect(() => {
    const script = document.createElement('script');
    document.querySelector('#form-container').appendChild(script);
    script.type = 'text/javascript';
    script.src = 'https://timepad.ru/js/tpwf/loader/min/loader.js';
    script.dataset.timepadCustomized = '134610';
    script.dataset['twf2sEvent-Id'] = '1464460';
    script.dataset.timepadWidgetV2 = 'event_register';
    script.async = true;
    script.defer = 'defer';
  }, []);

  return (
    <S.Section>
      <S.Container id="form-container">
        <h1>ФОРМА РЕГИСТРАЦИИ</h1>
      </S.Container>
    </S.Section>
  );
};

export default EventReg;
