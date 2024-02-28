import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionOptionContainer, ActionTitle, ActionsContainer } from './ActionConfirmedStyles';
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles';
import { HiArrowLeft } from "react-icons/hi2";
import { setNavigationSource, toggleHiddenAction } from '../../../redux/Planillero/planillaSlice';
import { toggleHiddenTime } from '../../../redux/Planillero/planillaTimeSlice';
import { toggleHiddenAsist } from '../../../redux/Planillero/planillaAsist';

const ActionConfirmed = () => {
    const dispatch = useDispatch();
    const hiddenActions = useSelector((state) => state.planilla.hidden);

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (selectedOption === "Gol") {
            dispatch(setNavigationSource('Assisted'));
            dispatch(toggleHiddenAsist());
        } else {
            dispatch(toggleHiddenTime());
            dispatch(setNavigationSource('Other'));
        }
        dispatch(toggleHiddenAction());
    };

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
                            <input 
                                type="radio" 
                                name="opt1" 
                                id=""
                                value="Gol"
                                onChange={() => handleOptionChange("Gol")}
                            />
                            <p>Gol</p>
                        </ActionOptionContainer>
                        <ActionOptionContainer>
                            <input 
                                type="radio" 
                                name="opt1" 
                                id=""
                                value="Amarilla"
                                onChange={() => handleOptionChange("Amarilla")}
                            />
                            <p>Amarilla</p>
                        </ActionOptionContainer>
                        <ActionOptionContainer>
                            <input 
                                type="radio" 
                                name="opt1" 
                                id=""
                                value="Roja"
                                onChange={() => handleOptionChange("Roja")}
                            />
                            <p>Roja</p>
                        </ActionOptionContainer>
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

export default ActionConfirmed;
