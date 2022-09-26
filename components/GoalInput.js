import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
})

export const GoalInput = ({ goalInputHandler, addGoalHandler, showModal }) => {
    return (
        <Modal
            visible={showModal}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                />
                <Button
                    title='add goal'
                    onPress={addGoalHandler}
                />
            </View>
        </Modal>
    )
}
