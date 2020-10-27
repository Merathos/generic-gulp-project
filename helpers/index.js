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
  Media,
  MarkerList
} from 'components';

import { TitleH2, TitleH3 } from 'elements';

export const fromSecToDuration = duration => {
  const min = parseInt(duration / 60);
  let sec = parseInt(duration % 60);

  if (sec < 10) {
    sec = '0' + sec;
  }

  return `${min}:${sec}`;
};


export const getNewTags = (arr, slug) => {
  if (!arr) {
    return [slug];
  }
  if (arr === slug) {
    return '';
  }
  if (Array.isArray(arr)) {
    if (arr.includes(slug)) {
      return arr.filter(i => i && i.length > 0 && i !== slug);
    }
    return [...arr, slug].filter(i => i && i.length > 0);
  }
  if (arr.length > 0) {
    return [arr, slug];
  }
  return '';
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

          header:
            data.level === 2 ? (
              <TitleH2>{data.text}</TitleH2>
            ) : (
              <TitleH3>{data.text}</TitleH3>
          ),
          paragraph: <Paragraph bold="700" data={data} />,
          list:
            data.style === 'ordered' ? (
              <MarkerList data={data.items} />
            ) : (
              <MarkerList type="ellipse" data={data.items} />
            ),
          image: <></>, //<Media type="img" data={data} decoration />,
          columns: (
            <></>
          ),
          factoids: (
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
