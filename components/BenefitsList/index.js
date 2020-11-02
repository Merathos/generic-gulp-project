import { EventBanner, BlogsBanner } from 'components';
import { Container, List, ListItem, H3, Text, Ref } from './styles';
import Link from 'next/link';

const BenefitsList = ({ data }) => {
  const { benefits, showEvent, bannersData, blogLinkDefault } = data;

  return (
    <Container>
      <List>
        {benefits.map((benefit, index) => (
          <ListItem key={index}>
            <H3>{benefit.title}</H3>
            <Text>{benefit.explanation}</Text>
            <Link href="/" passHref>
              <Ref>{benefit.details}</Ref>
            </Link>
          </ListItem>
        ))}
        <ListItem key={'banner'} banner={true}>
          {showEvent ? (
            <EventBanner data={bannersData.event} />
          ) : (
            <BlogsBanner
              data={bannersData.blogLinksData}
              blogLinkType={blogLinkDefault}
            />
          )}
        </ListItem>
      </List>
    </Container>
  );
};

export default BenefitsList;
