import { TeamCard } from 'components';
import { Container, Title, List, ListItem } from './styles';

const title = 'Команды';

const Teams = ({ teams }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {teams.map((team, index) => {
          if (index < 3) {
            return (
              <ListItem key={team.id}>
                <TeamCard data={team} />
              </ListItem>
            );
          }
          return null;
        })}
      </List>
    </Container>
  );
};

export default Teams;
