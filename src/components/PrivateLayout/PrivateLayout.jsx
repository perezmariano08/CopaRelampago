import React from 'react'
import { LayoutContainerStyled } from '../Layout/LayoutStyles'
import { Navbar } from '../Navbar/Navbar'
import MenuBottom from '../MenuBottom/MenuBottom'

const PrivateLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        <LayoutContainerStyled>
            {
                children
            }
        </LayoutContainerStyled>
        <MenuBottom/>
    </>
  )
}

export default PrivateLayout