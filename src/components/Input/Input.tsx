import { HTMLProps, useEffect, useRef, useState } from 'react';
import { InputTText, StyledLabel } from './Input.styles';

interface InputProps extends HTMLProps<HTMLInputElement> {
  defaultValue?: string | number;
  innerClassName?: string;
  maxLength?: number;
  label: string;
}

const Input = ({
  onChange,
  value,
  defaultValue,
  innerClassName,
  maxLength,
  label,
  ...rest
}: InputProps) => {
  const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInnerValue(value ?? '');
  }, [value]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (
      rest.name === 'price' &&
      inputValue.length > 1 &&
      inputValue.startsWith('0')
    ) {
      inputValue = inputValue.slice(1);
    }

    if (rest.name === 'price' && isNaN(Number(inputValue))) {
      return;
    }

    if (maxLength && inputValue.length > maxLength) {
      return;
    }

    setInnerValue(inputValue);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <StyledLabel>
        {label}
        <InputTText
          ref={inputRef}
          value={innerValue}
          onChange={handleChange}
          className={innerClassName}
          {...rest}
        />
      </StyledLabel>
    </>
  );
};

export default Input;
