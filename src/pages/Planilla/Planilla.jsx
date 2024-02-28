import React from 'react'
import { MatchStatsContainer, MatchStatsWrapper } from '../MatchStats/MatchStatsStyles'
import Section from '../../components/Section/Section'
import CardFinalPartido from '../../components/Stats/CardFinalPartido/CardFinalPartido'
import Incidents from '../../components/Stats/Incidents/Incidents'
import FormacionesPlanilla from '../../components/FormacionesPlanilla/FormacionesPlanilla'
import ActionConfirmed from '../../components/FormacionesPlanilla/ActionConfirmed/ActionConfirmed'
import ActionTime from '../../components/FormacionesPlanilla/ActionTime/ActionTime'
import ActionAsisted from '../../components/FormacionesPlanilla/ActionAsisted/ActionAsisted'

const Planilla = () => {
  return (
    <MatchStatsContainer className='container'>
        <MatchStatsWrapper className='wrapper'>
            <Section>
                <h2>Ficha de partido</h2>
                <CardFinalPartido/>
            </Section>
            
            <FormacionesPlanilla/>

            <Incidents/>
            
            <ActionConfirmed/>
            <ActionAsisted/>
            <ActionTime/>

        </MatchStatsWrapper>
    </MatchStatsContainer>
    )
}

export default Planilla