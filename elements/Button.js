import styled from 'styled-components';

const Accent = styled.a`
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  background: #FB5235;
  border-radius: 8px;
  padding: 0 32px;
  color: #FFFFFF;
  display: inline-block;

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 120%;
  }
`;

const Default = styled.a`
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  color: #FB5235;
  border: 2px solid rgba(32, 31, 42, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 32px;
  box-sizing: border-box;
  display: inline-block;

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 120%;
  }
`;

const Button = ({ type = "default", children, className }) => (
  <>
  {
    {
      'accent': (
        <Accent className={className}>
          {children}
        </Accent>
      ),
      'default': (
        <Default className={className}>
          {children}
        </Default>
      )
    }[type]
  }
  </>
);

export default Button;
