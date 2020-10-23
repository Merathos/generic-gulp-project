import { 
  Paragraph,
  SidebarRelocation,
  Articles,
  SliderVacancy,
  SidebarSlider,
  Requirements,
  Conditions,
  Map,
  Application,
} from 'components';

export const fromSecToDuration = duration => {
  const min = parseInt(duration / 60);
  let sec = parseInt(duration % 60);

  if (sec < 10) {
    sec = '0' + sec;
  }

  return `${min}:${sec}`;
};

export const restOfDuration = duration => {
  const time = duration - 1;
  return time;
};

export const renderContent = props => {
  const { type, data } = props;
  return (
  <>
  {console.log(props)}
    {
      {
       // 'h2': <Paragraph bold="700" data={el} />,
        'h3': (
          <></>
        ),
        'paragraph': <Paragraph bold="700" data={data.text} />,
        'image': (
          <></>
        ),
        'columns': (
          <></>
        ),
        'factoids': (
          <></>
        ),
        'marker': (
          <></>
        ),
        'link': (
          <></>
        ),
        'note': (
          <></>
        ),
        'imageBig': (
          <></>
        ),
        'markerList': (
          <></>
        ),
        'numberList': (
          <></>
        ),
        'asideBlock': (
          <></>
        ),
        'slider': (
          <></>
        ),
        'video': (
          <></>
        ),
        'quote': (
          <></>
        ),
        'person': (
          <></>
        ),
        'comments': (
          <></>
        )
      }[type]
    }
  </>
  )
};
