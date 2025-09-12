import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [fraseDoDia, setFraseDoDia] = useState("");

  useEffect(() => {
    async function fetchFraseDoDia() {
      try {
        const hoje = new Date();
        const pad = n => (n < 10 ? `0${n}` : `${n}`);
        const ano = hoje.getFullYear();
        const mes = pad(hoje.getMonth() + 1);
        const dia = pad(hoje.getDate());
        const url = `https://liturgia.up.railway.app/v2/?dia=${dia}&mes=${mes}&ano=${ano}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.leituras && data.leituras.salmo && data.leituras.salmo.length > 0) {
          const refrao = data.leituras.salmo[0].refrao || "";
          setFraseDoDia(refrao.trim());
        }
      } catch (e) {
        setFraseDoDia("");
      }
    }
    fetchFraseDoDia();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 32, paddingTop: 8, backgroundColor: '#f4f4f4ff' }}>
      {/* Imagem de fundo superior */}
      <View style={styles.topImageContainer}>
        <Image source={require('./assets/images/capaFundo.jpg')} style={styles.topImage} resizeMode="cover" />
      </View>
      {/* Card de login */}
      <View style={styles.card}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.tabText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        <TextInput placeholder="E-mail" style={styles.input} placeholderTextColor="#ccc" />
        <TextInput placeholder="Senha" secureTextEntry style={styles.input} placeholderTextColor="#ccc" />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgot}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.or}>OU ACESSE VIA:</Text>
        <View style={styles.socialContainer}>
          <Image source={require('./assets/images/google.png')} style={styles.socialIcon} />
          <Image source={require('./assets/images/facebook.png')} style={styles.socialIcon} />
          <Image source={require('./assets/images/twitter.png')} style={styles.socialIcon} />
        </View>
      </View>
      {/* Frase do dia abaixo do card */}
      {fraseDoDia ? (
        <Text style={{ color: '#ff7f4f', fontWeight: 'bold', fontSize: 16, textAlign: 'center', marginTop: 35, fontStyle: 'italic', width: '100%' }}>
          "{fraseDoDia}"
        </Text>
      ) : null}
    </ScrollView>
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
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  tabActive: {
    backgroundColor: '#ff7f4f',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 32,
    marginRight: 2,
  },
  tab: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabText: {
    color: '#ff7f4f',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 12,
    fontSize: 15,
    color: '#333',
  },
  forgot: {
    alignSelf: 'flex-end',
    color: '#aaa',
    fontSize: 12,
    marginBottom: 18,
  },
  button: {
    backgroundColor: '#ff7f4f',
    borderRadius: 20,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 18,
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
  or: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  socialIcon: {
    width: 36,
    height: 36,
    marginHorizontal: 10,
  },
});
