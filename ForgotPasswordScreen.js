import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('./assets/images/capaFundo.jpg')} style={styles.topImage} resizeMode="cover" />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Esqueceu sua senha?</Text>
        <TextInput placeholder="E-mail cadastrado" style={styles.input} placeholderTextColor="#ccc" />
        <Text style={styles.info}>Enviaremos as informações da sua senha para seu e-mail.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4ff',
    alignItems: 'center',
  },
  topImageContainer: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 120,
  },
  topImage: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 24,
    marginTop: -60,
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    alignItems: 'center',
  },
  title: {
    color: '#ff7f4f',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 18,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 18,
    fontSize: 15,
    color: '#333',
  },
  info: {
    color: '#ff7f4f',
    fontSize: 15,
    marginBottom: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff7f4f',
    borderRadius: 20,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#ff7f4f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
