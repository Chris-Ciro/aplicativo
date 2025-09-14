import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function SubOracoesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#f4f4f4ff' }}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Orações</Text>
        <View style={styles.searchContainer}>
          <Image source={require('./assets/images/lupa.png')} style={styles.searchIcon} />
          <TextInput placeholder="Buscar" style={styles.searchInput} placeholderTextColor="#ccc" />
        </View>
        <View style={styles.grid}>
          <Text style={styles.subtitle}>Saúde</Text>
          <TouchableOpacity style={styles.cardTop} onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={styles.cardTitle}>Oração dos Enfermos</Text>
              <Text style={styles.cardText}>"Orações dos EnfermosOração dos Enfermos..."</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={styles.cardTitle}>Oração dos Enfermos</Text>
              <Text style={styles.cardText}>"Orações dos EnfermosOração dos Enfermos..."</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={styles.cardTitle}>Oração dos Enfermos</Text>
              <Text style={styles.cardText}>"Orações dos EnfermosOração dos Enfermos..."</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <Text style={styles.subtitle}>Casamento</Text>
          <TouchableOpacity style={styles.cardTop} onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={styles.cardTitle}>Oração dos Enfermos</Text>
              <Text style={styles.cardText}>"Orações dos EnfermosOração dos Enfermos..."</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={styles.cardTitle}>Oração dos Enfermos</Text>
              <Text style={styles.cardText}>"Orações dos EnfermosOração dos Enfermos..."</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={styles.cardTitle}>Oração dos Enfermos</Text>
              <Text style={styles.cardText}>"Orações dos EnfermosOração dos Enfermos..."</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 32,
    paddingTop: 8,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
    alignSelf: 'center',
    marginLeft: 32,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    justifyContent: 'flex-start',
    width: '90%',
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
    marginBottom: '30px',
  },
  cardTop: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    borderTopColor: '#DE8A68',
    borderBottomColor: '#DE8A68',
    borderTopWidth: '1px',
    borderBottomWidth: '1px',
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    borderBottomColor: '#DE8A68',
    borderBottomWidth: '1px',
    justifyContent: 'center',
  },
  cardIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  cardTitle: {
    color: '#000000',
    fontWeight: 'semibold',
    fontSize: 15,
    textAlign: 'left',
    marginTop: '7px',
    marginBottom: '5px',
    marginLeft: '15px',
  },
  cardText: {
    color: '#000000',
    fontSize: 11,
    flexWrap: 'wrap',
    textAlign: 'justify',
    width: 270,
    marginLeft: '25px',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
