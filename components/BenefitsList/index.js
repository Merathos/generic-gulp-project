import { BenefitsBanner } from 'components';
import { Container, List, ListItem, H3, Text, Link } from './styles';

const BenefitsList = ({ data }) => {
  const { benefits, showEvent, bannersData, blogLinkDefault } = data;

  return (
    <Container>
      <List>
        {benefits.map((benefit, index) => (
          <ListItem key={index}>
            <H3>{benefit.title}</H3>
            <Text>{benefit.explanation}</Text>
            <Link>{benefit.details}</Link>
          </ListItem>
        ))}
        <ListItem key={'banner'}>
          <BenefitsBanner
            data={bannersData}
            showEvent={showEvent}
            blogLinkType={blogLinkDefault}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default BenefitsList;
