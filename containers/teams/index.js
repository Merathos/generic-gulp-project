import { TeamCard } from 'components';
import { Container, Title, List, ListItem } from './styles';

const title = 'Команды';

const Teams = ({ data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {data.map((team, index) => (
          <ListItem key={index}>
            <TeamCard data={team} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Teams;
