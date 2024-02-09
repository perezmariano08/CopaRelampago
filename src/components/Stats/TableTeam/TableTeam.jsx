import React from 'react'
import { TableContainerStyled, TableWrapper, TableTitle, TableTitleDivider } from '../Table/TableStyles'

import UserDefault from '/user-default.png'
import { HiMiniStop } from "react-icons/hi2"

const TableTeam = () => {
  return (
    <TableContainerStyled>
        <TableTitle>
            <h3>Torneo Apertura 2024</h3>
            <p>Serie A</p>
        </TableTitle>
        <TableTitleDivider/>
        <TableWrapper>
            <thead>
            <tr>
                <th className='team'>Nombre</th>
                <th>PJ</th>
                <th>G</th>
                <th>A</th>
                <th> <HiMiniStop/> </th>
                <th> <HiMiniStop/> </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='team'>
                    <img src={UserDefault} alt="" />
                    Celta de Vino
                </td>
                <td>20</td>
                <td>10</td>
                <td>+6</td>
            </tr>
            <tr>
                <td className='team'>
                    <img src={UserDefault} alt="" />
                    Pura Quimica
                </td>
                <td>20</td>
                <td>10</td>
                <td>+8</td>
            </tr>
            <tr>
                <td className='team'>
                    <img src={UserDefault} alt="" />
                    Celta de Vino
                </td>
                <td>20</td>
                <td>10</td>
                <td>+6</td>
            </tr>
            <tr>
                <td className='team'>
                    <img src={UserDefault} alt="" />
                    Celta de Vino
                </td>
                <td>20</td>
                <td>10</td>
                <td>+6</td>
            </tr>
            <tr>
                <td className='team'>
                    <img src={UserDefault} alt="" />
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

export default TableTeam