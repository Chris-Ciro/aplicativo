import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Picker } from '@react-native-picker/picker';

const BIBLE_ID = "d63894c8d9a7a503-01"; // pt-BR
const API_TOKEN = "108bf05594d16efe8eed7aceb089addc";

export default function BibliaScreen({ navigation }) {
  const [livros, setLivros] = useState([]);
  const [livro, setLivro] = useState("");
  const [capitulos, setCapitulos] = useState([]);
  const [capitulo, setCapitulo] = useState("");
  const [versiculos, setVersiculos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Buscar livros ao montar
  useEffect(() => {
    async function fetchLivros() {
      setLoading(true);
      try {
        const url = `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/books`;
        const response = await fetch(url, {
          headers: { "api-key": API_TOKEN },
        });
        const data = await response.json();
        setLivros(data.data || []);
        if (data.data && data.data.length > 0) {
          setLivro(data.data[0].id);
        }
      } catch (e) {
        setLivros([]);
      }
      setLoading(false);
    }
    fetchLivros();
  }, []);

  // Buscar capítulos ao mudar livro
  useEffect(() => {
    if (!livro) return;
    async function fetchCapitulos() {
      setLoading(true);
      try {
        const url = `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/books/${livro}/chapters`;
        const response = await fetch(url, {
          headers: { "api-key": API_TOKEN },
        });
        const data = await response.json();
        setCapitulos(data.data || []);
        if (data.data && data.data.length > 0) {
          setCapitulo(data.data[0].id);
        }
      } catch (e) {
        setCapitulos([]);
      }
      setLoading(false);
    }
    fetchCapitulos();
  }, [livro]);

  // Buscar versículos ao mudar capítulo
  useEffect(() => {
    if (!capitulo) return;
    async function fetchVersiculos() {
      setLoading(true);
      try {
        const url = `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/chapters/${capitulo}`;
        const response = await fetch(url, {
          headers: { "api-key": API_TOKEN },
        });
        const data = await response.json();
        // O texto vem em HTML, vamos extrair os versículos usando regex
        let texto = data.data.content || "";
        // Remove tags HTML
        texto = texto.replace(/<[^>]+>/g, "");
        // Separa versículos por regex: número seguido de texto
        const versiculosSeparados = texto.match(/\d+[^\d]+/g) || [];
        setVersiculos(versiculosSeparados);
      } catch (e) {
        setVersiculos([]);
      }
      setLoading(false);
    }
    fetchVersiculos();
  }, [capitulo]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={{ backgroundColor: "#f4f4f4ff" }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 24, marginBottom: 8 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}> 
          <Image source={require("./assets/images/home.png")} style={{ width: 36, height: 36, marginRight: 12 }} />
        </TouchableOpacity>
        <Text style={[styles.title, { fontSize: 20 }]}>Bíblia Sagrada</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>Selecione o livro e capítulo:</Text>
        <Picker
          selectedValue={livro}
          style={styles.picker}
          onValueChange={(itemValue) => setLivro(itemValue)}
        >
          {livros.map((l) => (
            <Picker.Item key={l.id} label={l.name} value={l.id} />
          ))}
        </Picker>
        <Picker
          selectedValue={capitulo}
          style={styles.picker}
          onValueChange={(itemValue) => setCapitulo(itemValue)}
        >
          {capitulos.map((c) => (
            <Picker.Item key={c.id} label={c.reference} value={c.id} />
          ))}
        </Picker>
        {loading ? (
          <ActivityIndicator color="#ff7f4f" size="large" style={{ marginTop: 16 }} />
        ) : (
          <View style={styles.liturgiaBox}>
            {versiculos.map((texto, i) => {
              // Expressão para separar número do versículo do texto
              const match = texto.match(/^(\d+)(.*)/);
              if (match) {
                return (
                  <Text key={i} style={styles.versiculo}>
                    <Text style={{ fontWeight: 'bold' }}>{match[1]} </Text>
                    {match[2].trim()}
                    {'\n'}
                  </Text>
                );
              }
              return (
                <Text key={i} style={styles.versiculo}>
                  {texto}
                  {'\n'}
                </Text>
              );
            })}
          </View>
        )}
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
  cardText: {
    color: "#ff7f4f",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
  },
  picker: {
    width: "100%",
    marginBottom: 12,
    textAlign: "center",
  },
  liturgiaBox: {
    marginTop: 8,
    alignItems: "flex-start",
    width: "100%",
  },
  versiculo: {
    color: "#333",
    fontSize: 15,
    marginBottom: 8,
    textAlign: "justify",
  },
});
