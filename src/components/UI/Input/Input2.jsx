import React from 'react'
import { InputContainerStyled2, InputWrapper2 } from './InputSyles'

const Input2 = ({placeholder, children, type="text"}) => {
    return (
        <InputContainerStyled2>
            {children}
            <InputWrapper2 type={type} placeholder={placeholder}/>
        </InputContainerStyled2>
    )
}

export default Input2