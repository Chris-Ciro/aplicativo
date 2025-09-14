import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
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
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('./assets/images/user.png')} style={styles.iconImage} />
          </TouchableOpacity>
          <Image source={require('./assets/images/rosario.png')} style={styles.headerImage} />
        </View>
        <Text style={styles.title}>{fraseDoDia ? `"${fraseDoDia}"` : 'Deus seja louvado!'}</Text>
        <View style={styles.searchContainer}>
          <Image source={require('./assets/images/lupa.png')} style={styles.searchIcon} />
          <TextInput placeholder="Buscar" style={styles.searchInput} placeholderTextColor="#ccc" />
        </View>
        <View style={styles.grid}>
          <View>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Oracoes')}>
              <Image source={require('./assets/images/pray.png')} style={styles.cardIcon} />
              <Text style={styles.cardText}>Orações</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Calendario')}>
            <Image source={require('./assets/images/calendar.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>Calendário Litúrgico</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Terco')}>
            <Image source={require('./assets/images/terco.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>Terço</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sacramentos')}>
            <Image source={require('./assets/images/sacramentos.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>Sacramentos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Biblia')}>
            <Image source={require('./assets/images/bible.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>Bíblia Sagrada</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Acervo')}>
            <Image source={require('./assets/images/acervo.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>Acervo Digital</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Kids')}>
            <Image source={require('./assets/images/child.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>Área Infantil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Historia')}>
            <Image source={require('./assets/images/church.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>Histórias da igreja</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 32,
    paddingTop: 8,
    backgroundColor: '#f4f4f4ff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 24,
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  profileIcon: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  iconImage: {
    width: 72,
    height: 72,
  },
  headerImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  title: {
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#ff7f4f',
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 18,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 15,
    color: '#333',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 2,
    marginRight: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    width: 140,
    height: 90,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  cardText: {
    color: '#ff7f4f',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});
