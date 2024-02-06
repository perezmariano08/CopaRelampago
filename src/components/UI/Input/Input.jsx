import React from 'react'
import { InputContainerStyled, InputWrapper } from './InputSyles'

const Input = ({placeholder, children, type="text"}) => {
    return (
        <InputContainerStyled>
            {children}
            <InputWrapper type={type} placeholder={placeholder}/>
        </InputContainerStyled>
    )
}

export default Input