import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleH2 from '/elements/TitleH2';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Component } from 'react';
import MarkerIcon from 'public/icons/marker.svg';

const Section = styled.section`
  margin-bottom: 160px;
`;

const H2 = styled(TitleH2)`
  margin-bottom: 75px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
`;

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '460px',
      latitude: 59.94984372479269,
      longitude: 30.33145024042134,
      zoom: 12.275823249249143
    }
  };

  render() {
    return (
      <Section>
        <H2 content={this.props.data.title} />
        <div>
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
        </div>
     </Section>
    );
  }
}

export default Map;