import React from 'react'
import { MenuBottomContainerStyled, MenuBottomItem, MenuBottomWrapper } from './MenuBottomStyles'
import { HiHome, HiOutlineUserGroup, HiAdjustmentsVertical, HiBars3BottomRight} from 'react-icons/hi2'
const MenuBottom = () => {
  return (
    <MenuBottomContainerStyled>
      <MenuBottomWrapper>
        <MenuBottomItem to={'/'}>
          <HiHome/>
          HOME
        </MenuBottomItem>
        <MenuBottomItem to={'/my-team'}>
          <HiOutlineUserGroup/>
          MI EQUIPO
        </MenuBottomItem>
        
        <MenuBottomItem to={'/onboarding'}>
          <HiAdjustmentsVertical/>
          ESTADISTICAS
        </MenuBottomItem>
        <MenuBottomItem to={'/onboarding'}>
          <HiBars3BottomRight/>
          MAS
        </MenuBottomItem>
      </MenuBottomWrapper>
    </MenuBottomContainerStyled>
  )
}

export default MenuBottom