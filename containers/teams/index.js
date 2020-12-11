import { TeamCard } from 'components';
import { Container, Title, List, ListItem } from './styles';

const title = 'Команды';

const Teams = ({ teams }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {teams.map(team => (
          <ListItem key={team.id}>
            <TeamCard data={team} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Teams;
