import { Map as Mapcomp, Placemark, YMaps } from 'react-yandex-maps';
import { useEffect, useState } from 'react';

const Map = ({ data: { center, markers, zoom, controls, behaviors } }) => {
  const initialWidth = useWindowWidth();

  return (
    <>
      <YMaps
        query={{
          load: 'package.full',
        }}
      >
        <Mapcomp
          className={'map-container'}
          state={{
            center: [center.lat, center.lng],
            zoom: initialWidth > 768 ? zoom : zoom - 1,
            controls,
            behaviors,
          }}
          modules={['layout.Image']}
          options={{ suppressMapOpenBlock: true }}
        >
          {markers?.length > 0 &&
            markers.map(marker => (
              <Placemark
                key={marker.id}
                geometry={[marker.coordinates.lat, marker.coordinates.lng]}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: '/icons/map-marker.svg',
                  iconImageSize: [43, 60],
                  iconImageOffset: [-21.5, -60],
                }}
              />
            ))}
        </Mapcomp>
      </YMaps>
    </>
  );
};

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowWidth;
}

export default Map;
