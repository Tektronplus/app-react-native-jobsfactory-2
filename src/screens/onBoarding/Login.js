import {Text, TextInput, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import MyButton from "../../components/MyButton";

export default function Login() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <StatusBar style="auto"/>
            <Text>Benvenuto nella pagina di Login!</Text>
            <TextInput
                placeholder='Username'>
            </TextInput>
            <TextInput
                placeholder='Password'
                secureTextEntry={true}>
            </TextInput>
            <MyButton
                isDisabled={false}
                onPress={() => console.log("Pressed")}
                text={"Accedi"}>
            </MyButton>
        </View>
    );
}