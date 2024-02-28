// ActionAsisted.js

import React from 'react';
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionTitle, ActionsContainer } from '../ActionConfirmed/ActionConfirmedStyles';
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles';
import { HiArrowLeft } from "react-icons/hi2";
import Input2 from '../../UI/Input/Input2';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenAction } from '../../../redux/Planillero/planillaSlice';
import { toggleHiddenAsist } from '../../../redux/Planillero/planillaAsist';
import { toggleHiddenTime } from '../../../redux/Planillero/planillaTimeSlice';

const ActionAsisted = () => {
    const dispatch = useDispatch();
    const hiddenAsist = useSelector((state) => state.planillaAsist.hidden);

    const handleNext = () => {
        dispatch(toggleHiddenAsist());
        dispatch(toggleHiddenTime());
    };

    const handleBack = () => {
        dispatch(toggleHiddenAsist());
        dispatch(toggleHiddenAction());
    };


    return (
        <>
        {!hiddenAsist && (
            <ActionConfirmedContainer>
                <ActionConfirmedWrapper>
                    <ActionBack onClick={handleBack}>
                        <HiArrowLeft />
                        <p>Volver</p>
                    </ActionBack>
                    <ActionTitle>
                        <h3>Indique el dorsal del asistidor</h3>
                        <AlignmentDivider/>
                    </ActionTitle>

                    <ActionsContainer>
                        <Input2 placeholder={"ej: 10"}/>
                    </ActionsContainer>
                    <ActionNext onClick={handleNext}>
                        Siguiente
                    </ActionNext>
                </ActionConfirmedWrapper>
            </ActionConfirmedContainer>
        )}
        </>
    );
}

export default ActionAsisted;
