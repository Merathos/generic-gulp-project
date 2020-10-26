import { TeamCard } from 'components';
import { Container, Title, List } from './styles';

const title = 'Команды';

const Teams = ({ data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {data.map((team, index) => (
          <li key={index}>
            <TeamCard data={team} isMain={true} />
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Teams;
