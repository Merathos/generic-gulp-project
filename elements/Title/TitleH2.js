import styled from 'styled-components';

const Styled = styled.h2`
  font-size: 54px;
  line-height: 130%;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  a {
    color: #53b443;
    font-weight: bold;
    display: inline;

    &:hover {
      color: #339722;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`;

const TitleH2 = ({ dangerouslySetInnerHTML, children, className }) => (
  <>
    {dangerouslySetInnerHTML ? (
      <Styled
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        className={className}
      />
    ) : (
      <Styled className={className}>{children}</Styled>
    )}
  </>
);

export default TitleH2;
