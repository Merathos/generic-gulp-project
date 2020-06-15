import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleH2 = styled.h2`
  font-weight: 800;
  font-size: 54px;
  line-height: 130%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const TitleH3 = styled.h3`
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 158%;
`;

const Comments = props => {
  const {
    data: { title, text },
    size
  } = props;
  return (
    <section className="main__special-offer special-offer">
      {title && (
        <>
          {size === 'h3' ? (
            <TitleH3>{title}</TitleH3>
          ) : (
            <TitleH2>{title}</TitleH2>
          )}
        </>
      )}
      <Text>{text}</Text>
    </section>
  );
};

Comments.propTypes = {
  data: PropTypes.objectOf({
    title: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  size: PropTypes.string
};

Comments.defaultProps = {
  size: 'h2'
};

export default Comments;
