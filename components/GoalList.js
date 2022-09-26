import { StyleSheet, View, FlatList, Text } from 'react-native'
import { useUIDSeed } from 'react-uid'
import { GoalItem } from './GoalItem'

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 4,
    },
    goalItem: {
        padding: 8,
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalItemText: {
        color: 'white',
    },
})

export const GoalList = ({ goals, deleteGoalHandler }) => {
    const uid = useUIDSeed()

    return (
        <View style={styles.goalsContainer}>
            <FlatList
                data={goals}
                renderItem={(itemData) => (
                    <GoalItem
                        onDeleteItem={deleteGoalHandler}
                        id={itemData.item.id}
                        text={itemData.item.text}
                    />
                )}
                keyExtractor={(item, index) => uid(item)}
            />
        </View>
    )
}
