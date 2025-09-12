import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const topicos = [
  {
    nome: "Milagres",
    descricao: "Locais, datas e relatos de milagres reconhecidos pela Igreja.",
    img: require("./assets/images/historia/milagre.png"),
    caminho: "MilagresHistoria"
  },
  {
    nome: "Santos",
    descricao: "Biografias, feitos e curiosidades sobre santos católicos.",
    img: require("./assets/images/kids/santo.png"),
    caminho: "SantosHistoria"
  },
  {
    nome: "Países e Lugares",
    descricao: "História da Igreja em diferentes países e lugares sagrados.",
    img: require("./assets/images/historia/mundo.png"),
    caminho: "PaisesHistoria"
  },
  {
    nome: "Datas Importantes",
    descricao: "Principais datas, concílios, eventos e celebrações históricas.",
    img: require("./assets/images/historia/datas.png"),
    caminho: "DatasHistoria"
  },
  {
    nome: "Documentos e Relatos",
    descricao: "Documentos históricos, cartas e relatos relevantes da Igreja.",
    img: require("./assets/images/historia/pergaminho.png"),
    caminho: "DocumentosHistoria"
  },
];

export default function HistoriaScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={{ backgroundColor: "#f4f4f4ff" }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 24, marginBottom: 8 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}> 
          <Image source={require("./assets/images/home.png")} style={{ width: 36, height: 36, marginRight: 12 }} />
        </TouchableOpacity>
        <Text style={[styles.title, { fontSize: 20 }]}>Histórias da Igreja</Text>
      </View>
      <Text style={styles.cardText}>Descubra fatos, milagres, santos e lugares marcantes da história da Igreja Católica.</Text>
      {topicos.map((t, i) => (
        <TouchableOpacity key={i} style={styles.topicoCard} onPress={() => navigation.navigate(t.caminho)}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={t.img} style={styles.topicoImg} />
            <View style={{ marginLeft: 16, flex: 1 }}>
              <Text style={styles.topicoNome}>{t.nome}</Text>
              <Text style={styles.topicoDesc}>{t.descricao}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
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
  cardText: {
    width: "90%",
    color: "#333",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 8,
    marginTop: 12,
    fontWeight: "bold",
  },
  topicoCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginTop: 12,
    width: "90%",
    maxWidth: 340,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  topicoImg: {
    width: 48,
    height: 48,
    marginRight: 8,
    resizeMode: "contain",
  },
  topicoNome: {
    color: "#ff7f4f",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
    marginBottom: 4,
  },
  topicoDesc: {
    color: "#333",
    fontSize: 15,
    textAlign: "left",
    marginBottom: 4,
  },
});
