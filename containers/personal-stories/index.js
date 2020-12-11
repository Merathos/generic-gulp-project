import { PersonalStoriesSlider } from 'components';
import { Container } from './styles';

const PersonalStories = ({ blogs }) => {
  return (
    <Container>
      <PersonalStoriesSlider blogs={blogs} />
    </Container>
  );
};

export default PersonalStories;
