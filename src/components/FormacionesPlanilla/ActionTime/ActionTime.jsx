import React from 'react'
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionOptionContainer, ActionTitle, ActionsContainer } from '../ActionConfirmed/ActionConfirmedStyles'
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles'
import { HiArrowLeft } from "react-icons/hi2";
import Input2 from '../../UI/Input/Input2';


import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenTime } from '../../../redux/Planillero/planillaTimeSlice';
import { toggleHiddenAction } from '../../../redux/Planillero/planillaSlice';
import { toggleHiddenAsist } from '../../../redux/Planillero/planillaAsist';

const ActionConfirmed = () => {
    const dispatch = useDispatch();
    const hiddenTime = useSelector((state) => state.planillaTime.hidden)
    const navigationSource = useSelector((state) => state.planilla.navigationSource)

    const handleBack = () => {
        if (navigationSource === 'Assisted') {
            dispatch(toggleHiddenAsist());
            dispatch(toggleHiddenTime());
        } else {
            dispatch(toggleHiddenAction())
            dispatch(toggleHiddenTime())
        }

    }

  return (
    <>
        {
        !hiddenTime && (
            <ActionConfirmedContainer>
                <ActionConfirmedWrapper>
                    <ActionBack onClick={handleBack}>
                        <HiArrowLeft />
                        <p>Volver</p>
                    </ActionBack>
                    <ActionTitle>
                        <h3>Indique el minuto de la acción</h3> 
                        <AlignmentDivider/>
                    </ActionTitle>

                    <ActionsContainer>
                        <Input2 placeholder={"ej: 00:00"}/>
                    </ActionsContainer>
                    <ActionNext onClick={() => dispatch(toggleHiddenTime())}>
                        Confirmar
                    </ActionNext>
            </ActionConfirmedWrapper>
        </ActionConfirmedContainer>
            )
        }
    </>

  )
}

export default ActionConfirmed