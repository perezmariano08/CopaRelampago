import React from 'react'
import { FormacionesPlanillaTitle, FormacionesPlanillaWrapper, PlanillaButtons, TablePlanillaWrapper } from './FormacionesPlanillaStyles'
import { AlignmentDivider } from '../Stats/Alignment/AlignmentStyles'

const FormacionesPlanilla = () => {
  return (
    <FormacionesPlanillaWrapper>
        <FormacionesPlanillaTitle>
            <PlanillaButtons className='local'>
                Local
            </PlanillaButtons>
            <h3>Formaciones</h3>
            <PlanillaButtons>
                Visita
            </PlanillaButtons>
        </FormacionesPlanillaTitle>
        <AlignmentDivider/>
        <TablePlanillaWrapper>
            <thead>
                <tr className='head'>
                    <th>Dorsal</th>
                    <th>DNI</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bodyRow'>
                    <td className='dorsal'>10</td>
                    <td className='dni'>43450997</td>
                    <td className='text'>PEREZ SEIA, Conrado</td>
                </tr>
                <tr className='bodyRow'>
                    <td className='dorsal'>10</td>
                    <td className='dni'>43450997</td>
                    <td className='text'>PEREZ SEIA, Conrado</td>
                </tr>
            </tbody>
        </TablePlanillaWrapper>
    </FormacionesPlanillaWrapper>
  )
}

export default FormacionesPlanilla