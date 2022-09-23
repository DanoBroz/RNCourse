import { useState } from 'react'

export const useGoalAdd = () => {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    const [goals, setGoals] = useState([])

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        setGoals((prevState) => [...prevState, { text: enteredGoalText }])
    }

    return { goalInputHandler, addGoalHandler, goals }
}
