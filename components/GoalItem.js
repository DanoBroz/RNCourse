import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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

export const GoalItem = ({ text }) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>{text}</Text>
        </View>
    )
}
