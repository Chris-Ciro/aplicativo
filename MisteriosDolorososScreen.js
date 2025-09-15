import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function MisteriosDolorosos({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      style={{ backgroundColor: "#f4f4f4ff" }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 24,
          marginBottom: 8,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("./assets/images/home.png")}
            style={{ width: 36, height: 36, marginRight: 12 }}
          />
        </TouchableOpacity>
        <Text style={[styles.title, { fontSize: 20 }]}>Santo Terço</Text>
      </View>
      {/* <View style={styles.cardContainer}> */}
      {/* </View> */}
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>
          Mistérios Dolorosos (terças e sextas-feiras, e domingos da Quaresma até a Páscoa)
        </Text>
        <Text style={styles.cardList}>
          1. A agonia de Jesus no Horto das Oliveiras. No primeiro mistério contemplemos a Agonia de Cristo Nosso Senhor, quando suou sangue no Horto.
        </Text>
        <Text style={styles.cardList}>
          2. A flagelação de Jesus atado à coluna. No segundo mistério contemplemos a Flagelação de Jesus Cristo atado à coluna.
        </Text>
        <Text style={styles.cardList}>
          3. A coroação de espinhos de Jesus. No terceiro mistério contemplemos a Coroação de espinho de Nosso Senhor.
        </Text>
        <Text style={styles.cardList}>
          4. A subida dolorosa do Calvário. No quarto mistério contemplemos Jesus Cristo carregando a Cruz para o Calvário.
        </Text>
        <Text style={styles.cardList}>
          5. A morte de Jesus. No quinto mistério contemplemos a Crucificação e morte de Nosso Senhor Jesus Cristo.
        </Text>
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
    width: "90%",
    color: "#333",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 8,
    marginTop: 12,
    fontWeight: "bold",
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
