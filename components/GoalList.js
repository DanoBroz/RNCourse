import { StyleSheet, View, FlatList, Text } from 'react-native'
import { useUIDSeed } from 'react-uid'

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

export const GoalList = ({ goals }) => {
    const uid = useUIDSeed()

    return (
        <View style={styles.goalsContainer}>
            <FlatList
                data={goals}
                renderItem={(itemData) => (
                    <View style={styles.goalItem}>
                        <Text style={styles.goalItemText}>
                            {itemData.item.text}
                        </Text>
                    </View>
                )}
                keyExtractor={(item, index) => uid(item)}
            />
        </View>
    )
}
