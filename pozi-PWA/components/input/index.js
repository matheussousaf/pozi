import React, {
  useRef,
  useState,
  useCallback,
} from 'react';

import { Container } from './styles';

// import brlIcon from '../../../assets/images/brl.png';


const Input = ({ name, value, handleChange, placeholder }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {/* <img src={brlIcon} alt="BRL icon" /> */}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
