import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../style/MainStyle'

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        index: 0,
        rotes: [{name: "Principal"}]
    })
  }

  return (
    <View style={[styles.container, specificStyles.specificContainer]}>
      <Text>Olá mundo!</Text>
      <Input placeholder = "Email" leftIcon={{ type: 'font-awesome', name: 'envelope'}} keyboardType="email-address" styles={styles} onChangeText={value => setEmail(value)}
      />

      <Input placeholder = "Senha" leftIcon={{ type: 'font-awesome', name: 'lock'}} keyboardType="email-address" styles={styles} onChangeText={value => setPassword(value)} secureTextEntry={true}
      />

      <Button icon={
        <Icon name= "check" size={15} color="white"
        />
      }

      title="Entrar"
      onPress={() => entrar()}

      />
    </View>
  );
}

export const specificStyles = StyleSheet.create({
  specificContainer: {
    backgroundColor: '#fff',
  }
})

