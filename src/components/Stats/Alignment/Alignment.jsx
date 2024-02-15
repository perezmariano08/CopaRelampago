import React from 'react'
import { AlignmentDivider, AlignmentTeam, AlignmentTeams, AlignmentWrapper } from './AlignmentStyles'
import EscudoCelta from '/Escudos/celta-de-vino.png'

const Alignment = () => {
  return (
    <AlignmentWrapper>
        <h3>Formaciones</h3>
        <AlignmentDivider/>

        <AlignmentTeams>
            <AlignmentTeam>
                <img src={EscudoCelta} />
                <p>Celta de Vino</p>
            </AlignmentTeam>

            <AlignmentTeam>
                <img src= {EscudoCelta}/>
                <p>Celta de Vino</p>
            </AlignmentTeam>
        </AlignmentTeams>

    </AlignmentWrapper>
  )
}

export default Alignment