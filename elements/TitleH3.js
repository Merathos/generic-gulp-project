import styled from 'styled-components';

const Styled = styled.h3`
  font-size: 34px;
  line-height: 120%;
  font-weight: 600;

  a {
    color: #53b443;
    font-weight: bold;
    display: inline;

    &:hover {
      color: #339722;
    }
  }

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 120%;
  }
`;

const TitleH3 = ({ dangerouslySetInnerHTML, children, className }) => (
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

export default TitleH3;
