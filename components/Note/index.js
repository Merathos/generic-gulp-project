import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Subtitle from 'elements/Subtitle';
import TitleH4 from 'elements/TitleH4';

const Card = styled.div`
  background: linear-gradient(0deg, #f7f8f9, #f7f8f9), #201f2a;
  padding: 30px;
`;

const Note = props => {
  const {
    data: { img, subtitle, title },
    position
  } = props;
  return (
    <Card>
      {position === 'left' && <Link href="/about">to the left</Link>}
      <img src={img} alt={title} />
      <Subtitle content={subtitle} />
      <TitleH4 content={title} />
      {position === 'right' && <Link href="/about">to the right</Link>}
    </Card>
  );
};

Note.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  position: PropTypes.string
};

Note.defaultProps = {
  position: 'left'
};

export default Note;
