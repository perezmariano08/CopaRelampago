import React from 'react'
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionOptionContainer, ActionTitle, ActionsContainer } from '../ActionConfirmed/ActionConfirmedStyles'
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles'
import { HiArrowLeft } from "react-icons/hi2";
import Input2 from '../../UI/Input/Input2';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenTime } from '../../../redux/Planillero/planillaTimeSlice';
import { toggleHiddenAction } from '../../../redux/Planillero/planillaSlice';

const ActionConfirmed = () => {
    const dispatch = useDispatch();
    const hiddenTime = useSelector((state) => state.planillaTime.hidden)
  return (
    <>
        {
        !hiddenTime && (
            <ActionConfirmedContainer>
                <ActionConfirmedWrapper>
                    <ActionBack onClick={() => {
                        dispatch(toggleHiddenAction()) 
                        dispatch(toggleHiddenTime());
                        ;
                    }}>
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