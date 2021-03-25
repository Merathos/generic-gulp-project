import styled from 'styled-components';

const Styled = styled.p`
  font-size: 18px;
  line-height: 134%;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  a {
    color: #53b443;
    font-weight: bold;
    display: inline;

    &:hover {
      color: #339722;
    }
  }

  b {
    font-weight: bold;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 134%;
  }
`;

const Subtitle = ({ dangerouslySetInnerHTML, children, className }) => (
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

export default Subtitle;
