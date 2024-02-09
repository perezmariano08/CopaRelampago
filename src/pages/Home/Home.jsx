import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import CardPartido from '../../components/Stats/CardPartido/CardPartido'
import { HomeWrapper, HomeContainerStyled } from './HomeStyles'
import Section from '../../components/Section/Section'
import Table from '../../components/Stats/Table/Table'

const Home = () => {
    return (
        <>
            <Navbar/>
            <HomeContainerStyled>
                <HomeWrapper>
                    <Section>
                        <h2>Próximo partido</h2>
                        <CardPartido/>
                    </Section>
                    <Section>
                        <h2>Fecha 10 - Apertura 2024</h2>
                        <CardPartido finished/>
                    </Section>
                    <Section>
                        <h2>Posiciones</h2>
                        <Table/>
                    </Section>
                </HomeWrapper>
            </HomeContainerStyled>
            
        </> 
    )
}

export default Home