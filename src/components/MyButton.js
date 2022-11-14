import { Pressable, StyleSheet, Text } from "react-native";

export const MyButton = ({ isDisabled, text, onPress}) => {
    return (

        <Pressable
            style={styles.button}
            onPress={onPress}
            disabled={isDisabled}
        >
            <Text style={styles.buttonText} >{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '30%',
        height: 40,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: 'lightblue',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default MyButton;