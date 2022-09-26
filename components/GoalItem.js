import { View, Text, StyleSheet, Pressable } from 'react-native'

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        overflow: 'hidden',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalItemText: {
        padding: 8,
        color: 'white',
    },
})

export const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItemText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}
