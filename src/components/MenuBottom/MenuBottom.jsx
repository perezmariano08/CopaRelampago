import React from 'react'
import { MenuBottomContainerStyled, MenuBottomItem, MenuBottomWrapper } from './MenuBottomStyles'
import { HiHome, HiOutlineUserGroup, HiAdjustmentsVertical, HiBars3BottomRight, HiMiniTableCells} from 'react-icons/hi2'
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
        
        <MenuBottomItem to={'/stats'}>
          <HiAdjustmentsVertical/>
          ESTADISTICAS
        </MenuBottomItem>

        <MenuBottomItem to={'/news'}>
          <HiMiniTableCells/>
          NOTICIAS
        </MenuBottomItem>

        <MenuBottomItem to={'/more'}>
          <HiBars3BottomRight/>
          MAS
        </MenuBottomItem>
      </MenuBottomWrapper>
    </MenuBottomContainerStyled>
  )
}

export default MenuBottom