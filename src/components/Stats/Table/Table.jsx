import React from 'react'
import { TableContainerStyled, TableTitle, TableTitleDivider, TableWrapper } from './TableStyles'
import EscudoCelta from '/Escudos/celta-de-vino.png'
import EscudoPuraQuimica from '/Escudos/pura-quimica.png'

const Table = () => {
    return (
        <TableContainerStyled>
            <TableTitle>
                <h3>Torneo Apertura</h3>
                <p>Serie A</p>
            </TableTitle>
            <TableTitleDivider/>
            <TableWrapper>
            <thead>
            <tr>
                <th>#</th>
                <th className='team'>Equipo</th>
                <th>Pts</th>
                <th>PJ</th>
                <th>DG</th>
            </tr>
        </thead>
        <tbody>
            <tr className='one'>
                <td>1</td>
                <td className='team'>
                    <img src={EscudoCelta} alt="" />
                    Celta de Vino
                </td>
                <td>20</td>
                <td>10</td>
                <td>+6</td>
            </tr>
            <tr className='my-team one'>
                <td>2</td>
                <td className='team'>
                    <img src={EscudoPuraQuimica} alt="" />
                    Pura Quimica
                </td>
                <td>20</td>
                <td>10</td>
                <td>+8</td>
            </tr>
            <tr className='two'>
                <td>1</td>
                <td className='team'>
                    <img src={EscudoCelta} alt="" />
                    Celta de Vino
                </td>
                <td>20</td>
                <td>10</td>
                <td>+6</td>
            </tr>
            <tr className='three'>
                <td>1</td>
                <td className='team'>
                    <img src={EscudoCelta} alt="" />
                    Celta de Vino
                </td>
                <td>20</td>
                <td>10</td>
                <td>+6</td>
            </tr>
            <tr className=''>
                <td>1</td>
                <td className='team'>
                    <img src={EscudoCelta} alt="" />
                    Celta de Vino
                </td>
                <td>20</td>
                <td>10</td>
                <td>+6</td>
            </tr>
        </tbody>
        </TableWrapper>
        </TableContainerStyled>
        
    )
}

export default Table