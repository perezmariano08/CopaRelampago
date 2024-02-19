import React from 'react'
import { IncidentLocal, IndicentsContainer, IndicentsWrapper } from './IndicentsStyles'
import { AlignmentDivider, AlignmentTeam, AlignmentTeams } from '../Alignment/AlignmentStyles'

import EscudoCelta from '/Escudos/celta-de-vino.png'
import { HiLifebuoy, HiMiniStop, HiStar} from "react-icons/hi2";

const Incidents = () => {
  return (
    <IndicentsWrapper>
        <h3>Incidencias</h3>
        <AlignmentDivider/>
        <AlignmentTeams>
            <AlignmentTeam>
                <img src={EscudoCelta} alt="" />
                <h3>Celta de Vino</h3>
            </AlignmentTeam>
            
            <AlignmentTeam>
                <h3>Celta de Vino</h3>
                <img src={EscudoCelta} alt="" />
            </AlignmentTeam>
        </AlignmentTeams>

        <IndicentsContainer>
            <IncidentLocal>
                <h3>05'</h3>
                <HiLifebuoy/>
                <h4>PEREZ, Mariano</h4>
                <p>(1-0)</p>
            </IncidentLocal>

            <IncidentLocal className='visit'>                
                <h4>PEREZ, Mariano</h4>
                <p>(1-0)</p>
                <HiLifebuoy/>
                <h3>08'</h3>
            </IncidentLocal>

            <IncidentLocal className='visit'>                
                <h4>PEREZ, Mariano</h4>
                <p>(1-0)</p>
                <HiMiniStop className='yellow'/>
                <h3>08'</h3>
            </IncidentLocal>

            <IncidentLocal>
                <h3>20'</h3>
                <HiMiniStop className='red'/>
                <h4>POZZO, Joaquin</h4>
            </IncidentLocal>
            
            <IncidentLocal>
                <h3>MJ</h3>
                <HiStar className='yellow'/>
                <h4>POZZO, Joaquin</h4>
            </IncidentLocal>

        </IndicentsContainer>
    </IndicentsWrapper>
  )
}

export default Incidents