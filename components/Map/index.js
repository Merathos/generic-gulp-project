import ReactMapGL, { Marker } from 'react-map-gl';
import { Component } from 'react';
import { connect, useSelector } from 'react-redux';

import MarkerIcon from 'public/icons/marker.svg';
import { Metro } from 'components';
import * as S from './styles';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100%',
        height: '100%',
        latitude: 59.94984372479269,
        longitude: 30.33145024042134,
        zoom: 12.275823249249143,
      },
    };
  }

  render() {
    const { data, twoColumns = false } = this.props;
    const language = useSelector(state => state.language);
    return (
      <>
        <S.H2>{language ? data.titleEn : data.title}</S.H2>
        {data.location && (
          <S.Wrapper>
            <S.Place>{data.location}</S.Place>
            <span>{data.adress}</span>
          </S.Wrapper>
        )}
        <S.Container>
          <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken="pk.eyJ1IjoibXlha2ltZW5rbyIsImEiOiJjazV2NGs5bDQwOHBhM25sYjdoejN5YmlhIn0.jrA7S2ccVQ6ZuC3tU9wCbQ"
            onViewportChange={viewport => this.setState({ viewport })}
            {...this.state.viewport}
          >
            <Marker
              latitude={59.94984372479269}
              longitude={30.33145024042134}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <MarkerIcon />
            </Marker>
            <Marker
              latitude={59.94984372479269}
              longitude={30.33145024042134}
              offsetLeft={-130}
              offsetTop={-100}
            >
              <MarkerIcon />
            </Marker>
          </ReactMapGL>
        </S.Container>
        {data.stations && (
          <S.List twoColumns={twoColumns}>
            {data.stations.map((el, i) => (
              <li key={i}>
                <Metro data={el} />
              </li>
            ))}
          </S.List>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  english: state.english,
});

export default connect(mapStateToProps)(Map);
