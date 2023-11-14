import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { 
    CountdownContainer, 
    FormContainer, 
    HomeContainer, 
    MinutesInput, 
    Separator, 
    StartCountdownButton, 
    TaskInput 
} from './styles'

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5).max(60)
})

export function Home() {

    const { register, handleSubmit, watch, formState } = useForm({
        resolver: zodResolver(newCycleFormValidationSchema),
    })

    function handleCreateNewCycle() {

    }

    const task = watch('task');
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput 
                        type="text" 
                        id="task" 
                        placeholder='Dê um nome para o seu projeto'
                        list='task-suggestions'
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
                        {...register('minutesAMount', {valueAsNumber: true})}
                    />

                    <span>minutos.</span>
                </FormContainer>
            

            <CountdownContainer>
                <span>0</span>
                <span>0</span>
                <Separator>:</Separator>
                <span>0</span>
                <span>0</span>
            </CountdownContainer>

                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}