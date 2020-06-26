import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  font-size: 20px;
  line-height: 158%;
  font-weight: bold;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 150%;
  }
`;

const Section = styled.section`
  padding: 40px 0 42px;
  border-top: 2px solid rgba(31, 32, 42, 0.1);
  border-bottom: 2px solid rgba(31, 32, 42, 0.1);
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 420px) {
    padding: 20px 0 30px;
    margin-bottom: 50px;
    flex-direction: column;
  }
`;

const Emoji = styled.div`
  background: linear-gradient(0deg, #F7F8F9, #F7F8F9), #201F2A;
  border-radius: 50%;
  margin-right: 30px;
  padding: 20px;

  @media screen and (max-width: 420px) {
    padding: 15px;
    margin-bottom: 20px;
  }
`;

const SectionNote = ({ data }) => {
  return (
    <Section>
      <Emoji>
        <span className="ec ec-fire" />
      </Emoji>
      <Text>{data}</Text>
    </Section>
  );
};

export default SectionNote;
