import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function MisteriosGozosos({ navigation }) {
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
          Mistérios Gozosos (segundas e sábados, e nos domingos do Advento)
        </Text>
        <Text style={styles.cardList}>
          1. Anunciação do Arcanjo São Gabriel à nossa Senhora. No primeiro
          mistério contemplemos a Anunciação do Arcanjo São Gabriel à Nossa
          Senhora.
        </Text>
        <Text style={styles.cardList}>
          2. A visita de Nossa Senhora à sua prima Santa Isabel. No segundo
          mistério contemplemos a Visitação de Nossa Senhora à sua prima Santa
          Isabel.
        </Text>
        <Text style={styles.cardList}>
          3. O nascimento de Jesus em Belém. No terceiro mistério contemplemos o
          Nascimento do Menino Jesus em Belém.
        </Text>
        <Text style={styles.cardList}>
          4. A apresentação do Menino Jesus no Tempo. No quarto mistério
          contemplemos a Apresentação do Menino Jesus no templo e a Purificação
          de Nossa Senhora.
        </Text>
        <Text style={styles.cardList}>
          5. Encontro de Jesus no Templo entre os Doutores da Lei. No quinto
          mistério contemplemos a Perda e o Encontro do Menino Jesus no templo.
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
