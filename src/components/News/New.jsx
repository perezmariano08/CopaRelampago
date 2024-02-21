import React from 'react'
import { NewFoot, NewSecondaryInfo, NewSecondaryWrapper } from './NewStyled'

const New = () => {
  return (
    <NewSecondaryWrapper>
        <img src="/back_login.jpg" />
        <NewSecondaryInfo>
          <h2>Enterate de las ultimas noticias del mejor torneo de Cordoba!</h2>
          <NewFoot>
            <img src="/Logos/CR-Logo.png" alt="" className='logo_foot'/>
            <p>Copa Relámpago - hace 3 horas</p>
          </NewFoot>
        </NewSecondaryInfo>
    </NewSecondaryWrapper>
  )
}

export default New