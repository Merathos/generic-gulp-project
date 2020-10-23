import {
  Container,
  Title,
  Date,
  EventButton,
  Link,
  ImageWrapper,
  Image,
} from './styles';

const BenefitsBanner = ({ data, showEvent, blogLinkType }) => {
  const { blogLinksData, event } = data;

  return (
    <Container
      showEvent={showEvent}
      blogLinkType={blogLinkType}
      bg={blogLinksData[blogLinkType].bg}
    >
      {showEvent && (
        <>
          <Title>{event.name}</Title>
          <Date>{event.date}</Date>
          <EventButton showEvent={showEvent} type="accent">
            {event.buttonText}
          </EventButton>
        </>
      )}
      {!showEvent && (
        <>
          <Link isEvent={showEvent}>
            {blogLinksData[blogLinkType].buttonText}
          </Link>
          <ImageWrapper>
            <Image
              src={blogLinksData[blogLinkType].image}
              blogLinkType={blogLinkType}
            />
          </ImageWrapper>
        </>
      )}
    </Container>
  );
};

export default BenefitsBanner;
