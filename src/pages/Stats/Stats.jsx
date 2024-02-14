import React from 'react'
import { StatsContainerStyled, StatsFilter, StatsFilterButton, StatsHeadContainer, StatsWrapper } from './StatsStyles'
import Select  from "../../components/UI/Select/Select"
import Table from "../../components/Stats/Table/Table"

const Stats = () => {
    return (
        <StatsContainerStyled>
            <StatsWrapper>

                <StatsHeadContainer>
                    <Select>

                    </Select>
                    <StatsFilter>
                        <StatsFilterButton className='active'>
                            Posiciones
                        </StatsFilterButton>
                        
                        <StatsFilterButton>
                            Goleadores
                        </StatsFilterButton>

                        <StatsFilterButton>
                            Asistencias
                        </StatsFilterButton>

                        <StatsFilterButton>
                            Expulsados
                        </StatsFilterButton>
                    </StatsFilter>
                </StatsHeadContainer>

                <Table>

                </Table>

                <Table>
                    
                </Table>
                
            </StatsWrapper>
        </StatsContainerStyled>
    )
}

export default Stats