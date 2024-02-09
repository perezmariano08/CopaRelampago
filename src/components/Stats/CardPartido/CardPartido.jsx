import React from 'react'
import { CardPartidoTitles, CardPartidoWrapper, CardPartidoTeams, CardPartidoTeam, CardPartidoInfo } from './CardPartidoStyles'
import EscudoCelta from '/Escudos/celta-de-vino.png'
import EscudoPuraQuimica from '/Escudos/pura-quimica.png'

const CardPartido = ({finished}) => {
    return (
        <CardPartidoWrapper>
            <CardPartidoTitles>
                
                <h3>Serie A - Apertura 2024</h3>
                {finished ? (
                        <>
                            <p>Sabado 03/02 | Fecha 1 - Cancha 1</p>
                        </>
                    ) : (
                        <>
                            <p>Fecha 1 - Cancha 1</p>
                        </>
                    )}

            </CardPartidoTitles>
            <CardPartidoTeams>
                <CardPartidoTeam>
                    <img src={EscudoCelta} />
                    <h4>
                        Celta de Vino
                    </h4>
                </CardPartidoTeam>

                <CardPartidoInfo>
                    {finished ? (
                        <>
                            <h4>4-2</h4>
                            <span>Final</span>
                        </>
                    ) : (
                        <>
                            <h5>17:00</h5>
                            <p>Sábado 05/04</p>
                        </>
                    )}
                </CardPartidoInfo>

                <CardPartidoTeam>
                    <img src={EscudoPuraQuimica} />
                    <h4>
                        Pura Química
                    </h4>
                </CardPartidoTeam>

            </CardPartidoTeams>
        </CardPartidoWrapper>
    )
}

export default CardPartido