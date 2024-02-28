// ActionConfirmed.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionOptionContainer, ActionTitle, ActionsContainer } from './ActionConfirmedStyles';
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles';
import { HiArrowLeft } from "react-icons/hi2";
import { toggleHiddenAction } from '../../../redux/Planillero/planillaSlice';
import { toggleHiddenTime } from '../../../redux/Planillero/planillaTimeSlice'; // Importa la acción de la otra ventana

const ActionConfirmed = () => {
    const dispatch = useDispatch();
    const hiddenActions = useSelector((state) => state.planilla.hidden);

    return (
        <>
        {!hiddenActions && (
            <ActionConfirmedContainer>
                <ActionConfirmedWrapper>
                    <ActionBack>
                        <HiArrowLeft onClick={() => dispatch(toggleHiddenAction())}/>
                        <p>Volver</p>
                    </ActionBack>
                    <ActionTitle>
                        <h3>Seleccione una acción</h3> 
                        <AlignmentDivider/>
                    </ActionTitle>

                    <ActionsContainer>
                        <ActionOptionContainer>
                            <input type="radio" name="opt1" id=""/>
                            <p>Gol</p>
                        </ActionOptionContainer>
                        <ActionOptionContainer>
                            <input type="radio" name="opt1" id=""/>
                            <p>Amarilla</p>
                        </ActionOptionContainer>
                        <ActionOptionContainer>
                            <input type="radio" name="opt1" id=""/>
                            <p>Roja</p>
                        </ActionOptionContainer>
                    </ActionsContainer>
                    <ActionNext onClick={() => { 
                        dispatch(toggleHiddenTime());
                        dispatch(toggleHiddenAction());
                    }}>
                        Siguiente
                    </ActionNext>
                </ActionConfirmedWrapper>
            </ActionConfirmedContainer> 
        )}
        </>
    );
}

export default ActionConfirmed;
