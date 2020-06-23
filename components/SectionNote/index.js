import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 158%;
  font-weight: bold;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 150%;
  }
`;

const Section = styled.section`
  padding: 40px 0 42px 87px;
  border-top: 2px solid rgba(31, 32, 42, 0.1);
  border-bottom: 2px solid rgba(31, 32, 42, 0.1);
  position: relative;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    padding: 74px 30px 30px;
    margin-bottom: 50px;
  }
`;

const Emoji = styled.span`
  width: 57px;
  height: 57px;
  background: linear-gradient(0deg, #F7F8F9, #F7F8F9), #201F2A;
  border-radius: 50%;
`;

const SectionNote = props => {
  const { sectionNote } = props;
  return (
    <Section>
      <Emoji class="ec ec-fire" />
      <Text>{sectionNote}</Text>
    </Section>
  );
};

export default SectionNote;
