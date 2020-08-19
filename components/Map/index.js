import * as S from './styles';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Component } from 'react';
import MarkerIcon from 'public/icons/marker.svg';
import { Metro } from 'components';

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 59.94984372479269,
      longitude: 30.33145024042134,
      zoom: 12.275823249249143
    }
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <S.H2 content={this.props.data.title} />
        {data.location && (
          <div>
            <span>{data.location}</span>
            <span>{data.adress}</span>
          </div>
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
          <ul>
            {data.stations.map((el, i) => (
              <li key={i}>
               <Metro data={el} />
              </li>
              ))
            }
          </ul>
        )}
     </>
    );
  }
}

export default Map;