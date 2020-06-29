import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  margin-bottom: 110px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

const Img = styled.img`
  margin-bottom: 40px;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

const ElementEllipse = styled.li`
  padding-left: 90px;
  position: relative;
  margin-bottom: 30px;

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
    margin-bottom: 20px;

    &::before {
      left: 0;
    }
  }
`;

const ElementNumber = styled.li`
  position: relative;
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

const Number = styled.span`
  color: #2F8ED9;
  margin-right: 20px;
  font-size: 18px;
  line-height: 120%;

  @media screen and (max-width: 420px) {
    margin-right: 10px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 158%;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 158%;
  }
`;


const MarkerList = props => {
  const { data, type } = props;
  return (
    <Section>
      {type === 'ellipse' ? (
        <ul>
          {data.map((el, i) => (
            <ElementEllipse key={i}>
              {el.image && <Img src={el.image} alt={el.title} />}
              <Text>{el.text}</Text>
            </ElementEllipse>
          ))}
        </ul>
      ) : (
        <ul>
          {data.map((el, i) => (
            <ElementNumber key={i}>
              <Number>{`0${i + 1}`}</Number>
              {el.image && <img src={el.image} alt={el.title} />}
              <Text>{el.text}</Text>
            </ElementNumber>
          ))}
        </ul>
      )}
    </Section>
  );
};

MarkerList.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string
};

MarkerList.defaultProps = {
  type: 'normal'
};

export default MarkerList;
