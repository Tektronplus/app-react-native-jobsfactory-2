import {StyleSheet, TextInput} from "react-native";

export const MyTextInput = ({placeholder, isHidden, onChangeText}) => {
    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            secureTextEntry={isHidden}
            autoFocus={true}

            onChangeText={onChangeText}
        >
        </TextInput>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        width: 200,
        margin: 12,

        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightblue',

        padding: 10,
    }
})

export default MyTextInput;