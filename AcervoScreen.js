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
    nome: "Músicas",
    descricao: "Acervo de músicas católicas para oração, celebração e meditação.",
    img: require("./assets/images/acervodigital/musica.png"),
    caminho: "MusicasAcervo"
  },
  {
    nome: "Vídeos",
    descricao: "Vídeos de formação, celebrações, testemunhos e eventos católicos.",
    img: require("./assets/images/acervodigital/video.png"),
    caminho: "VideosAcervo"
  },
  {
    nome: "Podcasts",
    descricao: "Podcasts sobre fé, espiritualidade, catequese e temas atuais.",
    img: require("./assets/images/acervodigital/podcast.png"),
    caminho: "PodcastsAcervo"
  },
  {
    nome: "Livros Digitais",
    descricao: "Livros, apostilas e documentos da Igreja para estudo e aprofundamento.",
    img: require("./assets/images/acervodigital/ebook.png"),
    caminho: "LivrosAcervo"
  },
  {
    nome: "Documentários",
    descricao: "Documentários sobre santos, história da Igreja e temas católicos.",
    img: require("./assets/images/acervodigital/documentario.png"),
    caminho: "DocumentariosAcervo"
  },
];

export default function AcervoScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={{ backgroundColor: "#f4f4f4ff" }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 24, marginBottom: 8 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}> 
          <Image source={require("./assets/images/home.png")} style={{ width: 36, height: 36, marginRight: 12 }} />
        </TouchableOpacity>
        <Text style={[styles.title, { fontSize: 20 }]}>Acervo Digital Católico</Text>
      </View>
      <Text style={styles.cardText}>Explore os principais acervos digitais para aprofundar sua fé e espiritualidade.</Text>
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
