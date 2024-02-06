import React from 'react'
import { InputContainerStyled, InputWrapper } from './InputSyles'

const Input = ({placeholder, children}) => {
    return (
        <InputContainerStyled>
            {children}
            <InputWrapper placeholder={placeholder}></InputWrapper>
        </InputContainerStyled>
    )
}

export default Input