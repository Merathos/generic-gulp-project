import Select, { components } from 'react-select';
import { Controller } from 'react-hook-form';
import { Children } from 'react';
import * as S from './styles';

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

const SelectInput = ({
  options,
  placeholder,
  name,
  onChange,
  setOpened,
  setClosed,
  error,
  control,
}) => {
  return (
    <S.Wrapper error={error}>
      <Controller
        as={Select}
        control={control}
        options={options}
        placeholder={placeholder}
        name={name}
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={onChange}
        onMenuOpen={setOpened}
        onMenuClose={setClosed}
        controlShouldRenderValue
        components={{
          ValueContainer: CustomValueContainer,
        }}
        styles={{
          valueContainer: (provided, state) => ({
            ...provided,
            overflow: 'visible',
          }),
          placeholder: (provided, state) => ({
            ...provided,
            position: 'absolute',
            top: state.hasValue || state.selectProps.inputValue ? -3 : '50%',
            transition: 'top 0.2s, font-size 0.2s',
            fontSize: (state.hasValue || state.selectProps.inputValue) && 14,
          }),
        }}
      />
    </S.Wrapper>
  );
};

export default SelectInput;
