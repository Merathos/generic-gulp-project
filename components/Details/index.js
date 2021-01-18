import * as S from './styles';
import Router from 'next/router';

const Details = ({ data: { block1, block2 } }) => {
  const handleClick = () => {
    Router.push({
      pathname: '/teams',
    }).then(() => window.scrollTo(0, 0));
  };

  return (
    <S.Section>
      <div>
        <S.H3>{block1.title}</S.H3>
        <S.Text>{block1.text}</S.Text>
        <S.List>
          {block1.list.map((el, i) => (
            <S.Element key={i}>
              <S.StyledIcon name={el.icon} />
              <S.ListText>{el.title}</S.ListText>
            </S.Element>
          ))}
        </S.List>
        <S.StyledSubtitle>{block1.subtitle}</S.StyledSubtitle>
        <S.Button accent onClick={handleClick}>
          {block1.button}
        </S.Button>
      </div>
      <div>
        <S.H3>{block2.title}</S.H3>
        {block2.text.map((item, index) => (
          <S.Text key={index}>{item}</S.Text>
        ))}
        <S.Links>
          {block2.links.map((el, i) => (
            <S.LinkElement key={i}>
              <S.Link
                href={el.link}
                {...(el.link.startsWith('http') && {
                  target: '_blank',
                  rel: 'nofollow noopener',
                })}
              >
                {el.title}
              </S.Link>
            </S.LinkElement>
          ))}
        </S.Links>
        <S.Image
          src={block2.picture.src}
          alt={block2.picture.alt}
          width="595"
          height="379"
        />
      </div>
    </S.Section>
  );
};

export default Details;
