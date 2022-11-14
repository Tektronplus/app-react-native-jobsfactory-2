import {Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import MyButton from "../../components/MyButton";
import MyTextInput from "../../components/MyTextInput";
import {useState} from "react";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //Methods
    const onPressedLogin = () => {
        console.log('username: '+ username +'\n'+ 'password: ' + password)
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <StatusBar style="auto"/>

            <Text>Benvenuto nella pagina di Login!</Text>

            <MyTextInput
                placeholder={'Username'}
                onChangeText={(value) => setUsername(value)}
                isHidden={false}
            />
            <MyTextInput
                placeholder={'Password'}
                onChangeText={(value) => setPassword(value)}
                isHidden={true}
            />
            <MyButton
                text={"Accedi"}
                isDisabled={false}
                onPress={() => onPressedLogin()}
            />
        </View>
    );
}