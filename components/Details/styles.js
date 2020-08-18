import styled from 'styled-components';
import { TitleH3, SmallText, Subtitle, Icon } from 'elements';

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 600px;
    grid-gap: 150px;
    padding-top: 160px;
    margin-bottom: 100px;

    @media screen and (max-width: 420px) {
      grid-template-columns: 1fr;
      grid-gap: 80px;
}
`;

export const H3 = styled(TitleH3)`
    margin-bottom: 30px;
`;

export const Text = styled(SmallText)`
    margin-bottom: 40px;
`;

export const StyledSubtitle = styled(Subtitle)`
    margin-bottom: 40px;
`;

export const List = styled.ul`
    margin-bottom: 80px;

    @media screen and (max-width: 420px) {
      margin-bottom: 50px;
  }
`;

export const Links = styled.ul`
    margin-bottom: 80px;
    display: flex;

    @media screen and (max-width: 420px) {
      margin-bottom: 50px;
  }
`;

export const Element = styled.li`
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 30px;
    }
`;

export const StyledIcon = styled(Icon)`
    margin-right: 20px;
`;

export const LinkElement = styled.li`
    margin-right: 40px;
`;

export const Link = styled.a`
    color: #53B443;
    font-weight: bold;
`;