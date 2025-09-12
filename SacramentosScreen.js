import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const sacramentos = [
  {
    nome: "Batismo",
    descricao: "É o primeiro sacramento, porta de entrada na vida cristã. Purifica do pecado original e faz parte da Igreja.",
    img: require("./assets/images/sacramentos/batismo.png"),
  },
  {
    nome: "Crisma",
    descricao: "Fortalece a fé recebida no Batismo, através do dom do Espírito Santo.",
    img: require("./assets/images/sacramentos/crisma.png"),
  },
  {
    nome: "Eucaristia",
    descricao: "É o sacramento do Corpo e Sangue de Cristo, alimento espiritual dos cristãos.",
    img: require("./assets/images/sacramentos/eucaristia.png"),
  },
  {
    nome: "Penitência (Confissão)",
    descricao: "Sacramento da reconciliação, onde recebemos o perdão dos pecados.",
    img: require("./assets/images/sacramentos/confissao.png"),
  },
  {
    nome: "Unção dos Enfermos",
    descricao: "Concede força, paz e coragem aos doentes, e pode trazer cura física e espiritual.",
    img: require("./assets/images/sacramentos/uncao.png"),
  },
  {
    nome: "Ordem",
    descricao: "Sacramento pelo qual alguns fiéis são consagrados como diáconos, padres ou bispos.",
    img: require("./assets/images/sacramentos/ordenacao.png"),
  },
  {
    nome: "Matrimônio",
    descricao: "Une homem e mulher em comunhão de vida e amor, abertos à família.",
    img: require("./assets/images/sacramentos/matrimonio.png"),
  },
];

export default function SacramentosScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={{ backgroundColor: "#f4f4f4ff" }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 24, marginBottom: 8 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}> 
          <Image source={require("./assets/images/home.png")} style={{ width: 36, height: 36, marginRight: 12 }} />
        </TouchableOpacity>
        <Text style={[styles.title, { fontSize: 20 }]}>Os Sete Sacramentos</Text>
      </View>
      {/* <View style={styles.cardContainer}> */}
        <Text style={styles.cardText}>Os sacramentos são sinais sagrados instituídos por Cristo para comunicar a graça divina. Eles acompanham o cristão em todas as etapas da vida.</Text>
      {/* </View> */}
      {sacramentos.map((s, i) => (
        <View key={i} style={styles.sacramentoCard}>
          <Image source={s.img} style={styles.sacramentoImg} />
          <Text style={styles.sacramentoNome}>{s.nome}</Text>
          <Text style={styles.sacramentoDesc}>{s.descricao}</Text>
        </View>
      ))}
      {/* <View style={styles.cardContainer}> */}
        <Text style={styles.cardText}>Os sacramentos são essenciais para a vida cristã, fortalecem a fé e nos aproximam de Deus em cada momento importante da nossa caminhada.</Text>
      {/* </View> */}
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
  cardText: {
    width: "90%",
    color: "#333",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 8,
    marginTop: 12,
    fontWeight: "bold",
  },
  sacramentoCard: {
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
  sacramentoImg: {
    width: 48,
    height: 48,
    marginBottom: 8,
    resizeMode: "contain",
  },
  sacramentoNome: {
    color: "#ff7f4f",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
  },
  sacramentoDesc: {
    color: "#333",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 4,
  },
});
