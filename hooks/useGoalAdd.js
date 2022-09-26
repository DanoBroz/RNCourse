import { useState } from 'react'

export const useGoalAdd = () => {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    const [goals, setGoals] = useState([])

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        setGoals((prevState) => [
            ...prevState,
            { text: enteredGoalText, id: Math.random().toString() },
        ])
    }

    const deleteGoalHandler = (id) => {
        setGoals((prevState) => prevState.filter((goal) => goal.id !== id))
    }

    return { goalInputHandler, addGoalHandler, deleteGoalHandler, goals }
}
