import { StyleSheet, View } from 'react-native'
import { GoalInput, GoalList } from './components'
import { useGoalAdd } from './hooks'

export default function App() {
    const { addGoalHandler, goalInputHandler, goals } = useGoalAdd()

    return (
        <View style={styles.appContainer}>
            <GoalInput
                addGoalHandler={addGoalHandler}
                goalInputHandler={goalInputHandler}
            />
            <GoalList goals={goals} />
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
