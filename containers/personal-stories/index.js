import { PersonalStoriesSlider } from 'components';
import { Container } from './styles';

const PersonalStories = ({ data }) => {
  return (
    <Container>
      <PersonalStoriesSlider data={data} />
    </Container>
  );
};

export default PersonalStories;
