import { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { GoalInput, GoalList } from './components'
import { useGoalAdd } from './hooks'

export default function App() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const { addGoalHandler, goalInputHandler, goals, deleteGoalHandler } =
        useGoalAdd()

    const startAddGoalHandler = () => {
        setIsModalVisible(true)
    }

    return (
        <View style={styles.appContainer}>
            <Button
                title='Add new Goal'
                color='#5e0acc'
                onPress={startAddGoalHandler}
            />
            {isModalVisible && (
                <GoalInput
                    visible={isModalVisible}
                    addGoalHandler={addGoalHandler}
                    goalInputHandler={goalInputHandler}
                />
            )}
            <GoalList
                goals={goals}
                deleteGoalHandler={deleteGoalHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
})
