import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  padding-left: 20px;
  display: flex;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    top: 50%;
    left: 0;
    background-color: #53B443;
    transform: translateY(-50%);
    border-radius: 50%;
    display: none;
  }
`;

const RadioButton = props => {
  const { name, handleChange, value, checked } = props;

  return (
    <>
      <input
        type="radio"
        name={name}
        id={value}
        onChange={e => handleChange(e.target.id)}
        checked={checked}
      />
      <Label htmlFor={value}>{value}</Label>
    </>
  );
};

export default RadioButton;