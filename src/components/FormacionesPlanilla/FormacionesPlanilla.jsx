import React, { useState } from 'react';
import { FormacionesPlanillaTitle, FormacionesPlanillaWrapper, PlanillaButtons, TablePlanillaWrapper } from './FormacionesPlanillaStyles';
import { AlignmentDivider } from '../Stats/Alignment/AlignmentStyles';
import EscudoCelta from '/Escudos/celta-de-vino.png';
import EscudoPuraQuimica from '/Escudos/pura-quimica.png';
import { useDispatch } from 'react-redux';
import { toggleHiddenAction } from '../../redux/Planillero/planillaSlice';

const FormacionesPlanilla = () => {
    const dispatch = useDispatch();
    const [activeButton, setActiveButton] = useState('local');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    return (
        <FormacionesPlanillaWrapper>
            <FormacionesPlanillaTitle>
                <PlanillaButtons
                    className={`local ${activeButton === 'local' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('local')}
                >
                    Local
                </PlanillaButtons>
                <img src={EscudoCelta} alt="" />
                <h3>Formaciones</h3>
                <img src={EscudoPuraQuimica} alt="" />
                <PlanillaButtons
                    className={`visitante ${activeButton === 'visitante' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('visitante')}
                >
                    Visita
                </PlanillaButtons>
            </FormacionesPlanillaTitle>
            <AlignmentDivider />
            <TablePlanillaWrapper>
                {activeButton === 'local' && (
                    <>
                        <thead>
                            <tr className='head'>
                                <th>Dorsal</th>
                                <th>DNI</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bodyRow'>
                                <td
                                    className='dorsal'
                                    onClick={() => dispatch(toggleHiddenAction())}
                                >
                                    10
                                </td>
                                <td className='dni'>43450997</td>
                                <td className='text'>PEREZ SEIA, Conrado</td>
                            </tr>
                        </tbody>
                    </>
                )
                
                || activeButton == 'visitante' && (
                    <>
                    <thead>
                        <tr className='head'>
                            <th className='visit'>Nombre</th>
                            <th className='visit'>DNI</th>
                            <th className='visit'>Dorsal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bodyRow'>
                            <td className='dni visit'>43450997</td>
                            <td className='text visit'>POZZO SEIA, Conrado</td>
                            <td
                                className='dorsal'
                                onClick={() => dispatch(toggleHiddenAction())}
                            >
                                10
                            </td>
                        </tr>
                    </tbody>
                </>
                )
                }
            </TablePlanillaWrapper>
        </FormacionesPlanillaWrapper>
    );
};

export default FormacionesPlanilla;
