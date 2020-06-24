import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paragraph } from 'components';

const Section = styled.section`
  margin-bottom: 110px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

const NormalList = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.position || 'row'};
  justify-content: space-between;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const BlueList = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.position || 'row'};
  justify-content: space-between;

  @media screen and (max-width: 420px) {
    flex-wrap: wrap;
  }
`;

const MarkerList = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.position || 'row'};
  justify-content: space-between;

  @media screen and (max-width: 420px) {
    flex-wrap: wrap;
  }
`;

const ElementEllipse = styled.li`
  padding-left: 90px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-image: url('icons/ellipse.svg');
    width: 12px;
    height: 12px;
    left: 30px;
    top: 10px;
  }

  @media screen and (max-width: 420px) {
    padding-left: 25px;

    &::before {
      left: 0;
    }
  }
`;

const ElementNumber = styled.li`
  padding-left: 40px;
  position: relative;
  display: flex;

  @media screen and (max-width: 420px) {

    &::before {
      left: 0;
    }
  }
`;

const Element = styled.li`
  width: 384px;
  margin-right: 60px;

  @media screen and (max-width: 420px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Number = styled.span`
  color: #2F8ED9;
  margin-right: 20px;
  font-size: 18px;
  line-height: 120%;

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

const Emoji = styled.div`
  width: 57px;
  height: 57px;
  background: linear-gradient(0deg, #F7F8F9, #F7F8F9), #201F2A;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const List = props => {
  const { data, position, type } = props;
  return (
    <Section>
      {
        {
          blue: (
            <BlueList position={position}>
              {data.map(el => (
                <Element>
                  <Paragraph size="h3" data={el} color="#2F8ED9" opacity="0.5" />
                </Element>
              ))}
            </BlueList>
          ),
          'normal': (
            <NormalList position={position}>
              {data.map(el => (
                <Element>
                  {el.src && <img src={el.src} alt={el.title} />}
                  <Paragraph size="h3" data={el} />
                </Element>
              ))}
            </NormalList>
          ),
          'ellipse': (
            <MarkerList position={position}>
              {data.map(el => (
                <ElementEllipse>
                  {el.image && <img src={el.image} alt={el.title} />}
                  <Paragraph size="h3" data={el} />
                </ElementEllipse>
              ))}
            </MarkerList>
          ),
          'number': (
            <MarkerList position={position}>
              {data.map(el => (
                <ElementNumber>
                  <Number>{`0${data.indexOf(el) + 1}`}</Number>
                  {el.image && <img src={el.image} alt={el.title} />}
                  <Paragraph size="h3" data={el} />
                </ElementNumber>
              ))}
            </MarkerList>
          ),
          'icons': (
            <BlueList position={position}>
              {data.map(el => (
                <Element>
                  <Emoji>
                    <span className={`ec ${el.icon}`} />
                  </Emoji>
                  <Paragraph
                    size="h3"
                    data={el}
                    color="#2F8ED9"
                    opacity="0.5"
                  />
                </Element>
              ))}
            </BlueList>
          )
        }[type]
      }
    </Section>
  );
};

List.propTypes = {
  data: PropTypes.objectOf({
    title: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  position: PropTypes.string,
  type: PropTypes.string
};

List.defaultProps = {
  position: 'row',
  type: 'normal'
};

export default List;
