import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function TercoScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={{ backgroundColor: "#f4f4f4ff" }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 24, marginBottom: 8 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}> 
          <Image source={require("./assets/images/home.png")} style={{ width: 36, height: 36, marginRight: 12 }} />
        </TouchableOpacity>
        <Text style={[styles.title, { fontSize: 20 }]}>Santo Terço</Text>
      </View>
      <View style={styles.cardContainer}>
        <Image source={require("./assets/images/tercoSagrado.png")} style={styles.cardImage} />
        <Text style={styles.cardText}>O Terço é uma oração tradicional católica que nos ajuda a meditar sobre os principais mistérios da vida de Jesus e Maria. É composto por cinco dezenas, cada uma dedicada a um mistério.</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Passo a passo para rezar o Terço:</Text>
        <Text style={styles.cardList}>1. Segure o crucifixo e faça o Sinal da Cruz.</Text>
        <Text style={styles.cardList}>2. Reze o Credo.</Text>
        <Text style={styles.cardList}>3. Reze um Pai-Nosso.</Text>
        <Text style={styles.cardList}>4. Reze três Ave-Marias.</Text>
        <Text style={styles.cardList}>5. Reze um Glória ao Pai.</Text>
        <Text style={styles.cardList}>6. Para cada dezena, anuncie o mistério correspondente, reze um Pai-Nosso, dez Ave-Marias e um Glória ao Pai.</Text>
        <Text style={styles.cardList}>7. Ao final, reze uma Salve Rainha e agradeça.</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Mistérios do Terço e dias da semana:</Text>
        <Text style={styles.cardList}><Text style={{ fontWeight: 'bold' }}>Segunda e Sábado:</Text> Mistérios Gozosos</Text>
        <Text style={styles.cardList}><Text style={{ fontWeight: 'bold' }}>Terça e Sexta:</Text> Mistérios Dolorosos</Text>
        <Text style={styles.cardList}><Text style={{ fontWeight: 'bold' }}>Quarta e Domingo:</Text> Mistérios Gloriosos</Text>
        <Text style={styles.cardList}><Text style={{ fontWeight: 'bold' }}>Quinta-feira:</Text> Mistérios Luminosos</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Orações principais:</Text>
        <Text style={styles.oracao}><Text style={{ fontWeight: 'bold' }}>Pai-Nosso:</Text> Pai nosso que estais no céu, santificado seja o vosso nome...</Text>
        <Text style={styles.oracao}><Text style={{ fontWeight: 'bold' }}>Ave-Maria:</Text> Ave Maria, cheia de graça, o Senhor é convosco...</Text>
        <Text style={styles.oracao}><Text style={{ fontWeight: 'bold' }}>Glória ao Pai:</Text> Glória ao Pai, ao Filho e ao Espírito Santo...</Text>
        <Text style={styles.oracao}><Text style={{ fontWeight: 'bold' }}>Credo:</Text> Creio em Deus Pai todo-poderoso, criador do céu e da terra...</Text>
        <Text style={styles.oracao}><Text style={{ fontWeight: 'bold' }}>Salve Rainha:</Text> Salve, Rainha, Mãe de Misericórdia, vida, doçura e esperança nossa, salve...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: "center",
    paddingBottom: 32,
    paddingTop: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff7f4f",
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center",
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 24,
    marginTop: 12,
    width: "90%",
    maxWidth: 340,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 16,
    resizeMode: "contain",
  },
  cardText: {
    color: "#333",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 8,
  },
  cardTitle: {
    color: "#ff7f4f",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
  },
  cardList: {
    color: "#333",
    fontSize: 15,
    marginBottom: 6,
    textAlign: "left",
    width: "100%",
  },
  oracao: {
    color: "#333",
    fontSize: 15,
    marginBottom: 8,
    textAlign: "justify",
    width: "100%",
  },
});
