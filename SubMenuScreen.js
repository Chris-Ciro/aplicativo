import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function SubMenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#f4f4f4ff' }}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Orações</Text>
        <View style={styles.searchContainer}>
          <Image source={require('./assets/images/lupa.png')} style={styles.searchIcon} />
          <TextInput placeholder="Buscar" style={styles.searchInput} placeholderTextColor="#ccc" />
        </View>
        <View style={styles.grid}>
          <View>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Login')}>
              <View>
                <Text style={styles.cardTitle}>Orações de Adoração</Text>
                <Text style={styles.cardText}>Orações de AdoraçãoOrações de AdoraçãoOrações de AdoraçãoOrações de Adoração!</Text>
              </View>
              <Image source={require('./assets/images/pray.png')} style={styles.cardIcon} />
            </TouchableOpacity>
          </View>
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
    color: '#ff7f4f',
    marginBottom: 16,
    alignSelf: 'flex-start',
    marginLeft: 32,
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
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 18,
    width: 350,
    height: 120,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
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
  cardTitle: {
    color: '#ff7f4f',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    marginBottom: '5px',
  },
  cardText: {
    color: '#ff7f4f',
    fontSize: 11,
    flexWrap: 'wrap',
    textAlign: 'justify',
    width: 200,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
