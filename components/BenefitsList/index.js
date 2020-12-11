import { EventBanner, BlogsBanner } from 'components';
import Link from 'next/link';
import { Container, List, ListItem, H3, Text, Ref } from './styles';

const BenefitsList = ({ data, banner }) => {
  const { benefits, bannersData, blogLinkDefault } = data;

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
        {banner && (
          <ListItem key="banner" banner>
            {banner.type === 'event' && <EventBanner data={banner.event} />}
            {banner.type === 'blog' && (
              <BlogsBanner
                data={bannersData.blogLinksData}
                blogLinkType={blogLinkDefault}
                banner={banner}
              />
            )}
          </ListItem>
        )}
      </List>
    </Container>
  );
};

export default BenefitsList;
