import styled from 'styled-components';
import PropTypes from 'prop-types';
import Subtitle from 'elements/Subtitle';

const Text = styled(Subtitle)`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

const Wrapper = styled.div`
  text-align: center;

  @media screen and (max-width: 420px) {
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

const Element = styled.li`
  text-align: center;

  @media screen and (max-width: 420px) {
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

const List = styled.ul`
  display: flex;
  overflow-x: scroll;

  @media screen and (max-width: 420px) {
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

const Img = styled.img`
  width: 706px;
  margin-right: 40px;

  @media screen and (max-width: 420px) {
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

const Slider = props => {
  const {
    data: { subtitle, pictures }
  } = props;
  return (
    <section>
      <Wrapper>
        <List>
          {pictures.map(el => (
            <Element>
              <Img src={el.src} alt={el.alt} />
            </Element>
          ))}
        </List>
      </Wrapper>
      <Text content={subtitle} />
    </section>
  );
};

Slider.propTypes = {
  data: PropTypes.objectOf({
    subtitle: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  type: PropTypes.string
};

Slider.defaultProps = {
  type: 'h2'
};

export default Slider;
