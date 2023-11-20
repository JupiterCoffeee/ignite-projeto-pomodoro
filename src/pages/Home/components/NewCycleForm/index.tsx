import { FormContainer, MinutesInput, TaskInput } from "./style";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()
    
    return (
        <FormContainer>
            <label htmlFor="">Vou trabalhar em</label>
            <TaskInput 
                type="text" 
                id="task" 
                placeholder='Dê um nome para o seu projeto'
                list='task-suggestions'
                disabled={!!activeCycle}
                {...register('task')}
            />

            <datalist id='task-suggestions'>
                <option value="Projeto 1"/>
            </datalist>

            <label htmlFor="">durante</label>
            <MinutesInput 
                type="number" 
                id="minutesAmount" 
                step={5}
                min={5}
                max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', {valueAsNumber: true})}
            />

            <span>minutos.</span>
        </FormContainer>
    )
}