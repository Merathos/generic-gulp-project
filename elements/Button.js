import styled from 'styled-components';

const Accent = styled.button`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  background: #FB5235;
  border-radius: 8px;
  padding: 22px 32px 26px;
  color: #FFFFFF;

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 120%;
  }
`;

const Default = styled.button`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  color: #FB5235;
  border: 2px solid rgba(32, 31, 42, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 22px 32px 26px;

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 120%;
  }
`;

const Button = ({ type = "default", content, className }) => (
  <>
  {
    {
      'accent': (
        <Accent type="button" className={className}>
          {content}
        </Accent>
      ),
      'default': (
        <Default type="button" className={className}>
          {content}
        </Default>
      )
    }[type]
  }
  </>
);

export default Button;
