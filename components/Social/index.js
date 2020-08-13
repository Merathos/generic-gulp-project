import * as S from './styles';

const Social = ({ links, grey }) => (
  <S.List>
    {links.map((el, i) => (
      <S.Element key={i}>
        <S.SocialLink href={el.link} grey={grey}>
          <S.Img src={el.picture} alt={el.title} />
        </S.SocialLink>
      </S.Element>
    ))}
  </S.List>
);

export default Social;
