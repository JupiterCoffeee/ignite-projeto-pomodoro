import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer, MinutesInput, Separator, StartCountdownButton, TaskInput } from './styles'

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput 
                        type="text" 
                        name="task" 
                        id="task" 
                        placeholder='Dê um nome para o seu projeto'
                        list='task-suggestions'
                    />
                    <datalist id='task-suggestions'>
                        <option value="Projeto 1"/>
                    </datalist>

                    <label htmlFor="">durante</label>
                    <MinutesInput 
                        type="number" 
                        name="minutesAmount" 
                        id="minutesAmount" 
                        step={5}
                        min={5}
                        max={60}
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

                <StartCountdownButton type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}