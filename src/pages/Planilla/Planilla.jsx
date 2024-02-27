import React from 'react'
import { MatchStatsContainer, MatchStatsWrapper } from '../MatchStats/MatchStatsStyles'
import Section from '../../components/Section/Section'
import CardFinalPartido from '../../components/Stats/CardFinalPartido/CardFinalPartido'
import Incidents from '../../components/Stats/Incidents/Incidents'

const Planilla = () => {
  return (
    <MatchStatsContainer className='container'>
        <MatchStatsWrapper className='wrapper'>
            <Section>
                <h2>Ficha de partido</h2>
                <CardFinalPartido/>
            </Section>
            
            <Incidents/>
        </MatchStatsWrapper>
    </MatchStatsContainer>
    )
}

export default Planilla