import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../style/MainStyle'

export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        index: 0,
        rotes: [{name: "Principal"}]
    })
  }

  const cadastrar = () => {
    navigation.navigation("Cadastro")
  }

  return (
    <View style={[styles.container, specificStyles.specificContainer]}>
      <Text h3>Cadastre-se</Text>
      <Input placeholder = "Email" leftIcon={{ type: 'font-awesome', name: 'envelope'}} keyboardType="email-address" styles={styles} onChangeText={value => setEmail(value)}
      />

      <Button icon={
        <Icon name= "check" size={15} color="white"
        />
      }

      buttonStyle={specificStyles.button}
      title="Entrar"
      onPress={() => entrar()}
      />

    </View>
  );
}

const specificStyles = StyleSheet.create({
  specificContainer: {
    backgroundColor: '#fff'
  },

  button: {
    width: "100%",
    marginTop: 10,

  }
})

