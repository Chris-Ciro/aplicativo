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
import { Calendar, LocaleConfig } from "react-native-calendars";

// Configuração global do calendário para pt-BR
LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt-br";

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

// Eventos litúrgicos resumidos por mês
const anoAtual = 2025;
const hoje = new Date();
const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
const dataHoje = `${anoAtual}-${pad(hoje.getMonth() + 1)}-${pad(
  hoje.getDate()
)}`;

// Função para mapear cor para imagem
const corToIcon = {
  Preto: require("./assets/images/litcolors/litblack.png"),
  Azul: require("./assets/images/litcolors/litblue.png"),
  Branco: require("./assets/images/litcolors/litbranca.png"),
  Dourado: require("./assets/images/litcolors/litgold.png"),
  Vermelho: require("./assets/images/litcolors/litred.png"),
  Rosa: require("./assets/images/litcolors/litrosa.png"),
  Roxo: require("./assets/images/litcolors/litroxo.png"),
  Verde: require("./assets/images/litcolors/litverde.png"),
};

function getCorIcon(cor) {
  // Normaliza para capitalizado
  const corFormatada = cor.charAt(0).toUpperCase() + cor.slice(1).toLowerCase();
  return corToIcon[corFormatada] || null;
}

export default function CalendarioScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(dataHoje);
  const [liturgia, setLiturgia] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchLiturgia() {
      setLoading(true);
      setLiturgia(null);
      try {
        const [ano, mes, dia] = selectedDate.split("-");
        const url = `https://liturgia.up.railway.app/v2/?dia=${dia}&mes=${mes}&ano=${ano}`;

        const response = await fetch(url);
        const data = await response.json();
        setLiturgia(data);
      } catch (e) {
        setLiturgia({ erro: "Não foi possível carregar a liturgia." });
      }
      setLoading(false);
    }
    fetchLiturgia();
  }, [selectedDate]);

  // Função para extrair a primeira frase do salmo do dia
  function getFraseDoDia() {
    if (liturgia && liturgia.leituras && liturgia.leituras.salmo && liturgia.leituras.salmo.length > 0) {
      const texto = liturgia.leituras.salmo[0].texto || "";
      // Extrai a primeira frase (até o primeiro ponto final ou quebra de linha)
      const match = texto.match(/^(.*?[\.!?])(\s|$)/);
      return match ? match[1].trim() : texto.trim();
    }
    return "";
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      style={{ backgroundColor: "#f4f4f4ff" }}
      showsVerticalScrollIndicator={true}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly", marginTop: 15, marginBottom: 8, width: '100%' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home', { fraseDoDia: getFraseDoDia() })}>
          <Image source={require('./assets/images/home.png')} style={{ width: 36, height: 36, marginRight: 12 }} />
        </TouchableOpacity>
        <Text style={[styles.title, { fontSize: 20 }]}>Calendário Litúrgico {anoAtual}</Text>
      </View>

      <View style={styles.calendarContainer}>
        <Calendar
          current={selectedDate}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: "#ff7f4f",
            },
          }}
          theme={{
            todayTextColor: "#ff7f4f",
            selectedDayBackgroundColor: "#ff7f4f",
            selectedDayTextColor: "#fff",
            arrowColor: "#ff7f4f",
            monthTextColor: "#ff7f4f",
            textMonthFontWeight: "bold",
            textMonthFontSize: 20,
            textSectionTitleColor: "#aaa",
            dayTextColor: "#333",
            textDisabledColor: "#ccc",
          }}
          firstDay={1}
          monthFormat={"MMMM yyyy"}
          locale={"pt-br"}
          style={{ marginBottom: 16 }}
        />
      </View>
      {/* Card de evento do mês, imagem comentada */}
      <View style={styles.cardContainer}>
        {/* <Image source={require('./assets/images/rosario.png')} style={styles.cardImage} /> */}
        <Text style={styles.cardText}>
          {selectedDate.split("-").reverse().join("/")}
        </Text>
        {loading ? (
          <ActivityIndicator
            color="#ff7f4f"
            size="large"
            style={{ marginTop: 16 }}
          />
        ) : liturgia && !liturgia.erro ? (
          <View style={styles.liturgiaBox}>
            <Text style={styles.liturgiaTitulo}>{liturgia.liturgia}</Text>
            {/* <Text style={styles.liturgiaSub}>Cor: {liturgia.cor}</Text> */}
            <View
              style={{
                flexDirection: "row",
                paddingTop: "8px",
                justifyContent: "center",
              }}
            >
              <Text style={styles.liturgiaSub}>Cor: {liturgia.cor}</Text>
              {getCorIcon(liturgia.cor) && (
                <Image
                  source={getCorIcon(liturgia.cor)}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 8,
                    resizeMode: "contain",
                  }}
                />
              )}
            </View>
            {/* Orações */}
            {liturgia.oracoes && (
              <View style={{ marginTop: 8 }}>
                <Text style={styles.liturgiaLeituras}>
                  <Text style={{ fontWeight: "bold" }}>Coleta:</Text>{" "}
                  {liturgia.oracoes.coleta}
                </Text>
                <Text style={styles.liturgiaLeituras}>
                  <Text style={{ fontWeight: "bold" }}>Oferendas:</Text>{" "}
                  {liturgia.oracoes.oferendas}
                </Text>
                <Text style={styles.liturgiaLeituras}>
                  <Text style={{ fontWeight: "bold" }}>Comunhão:</Text>{" "}
                  {liturgia.oracoes.comunhao}
                </Text>
              </View>
            )}
            {/* Leituras */}
            {liturgia.leituras && (
              <View style={{ marginTop: 8 }}>
                {liturgia.leituras.primeiraLeitura?.map((l, i) => (
                  <View key={i} style={{ marginBottom: 6 }}>
                    <Text style={styles.liturgiaLeituras}>
                      <Text style={{ fontWeight: "bold" }}>
                        Primeira Leitura:
                      </Text>{" "}
                      {l.referencia}
                    </Text>
                    <Text style={styles.liturgiaLeituras}>{l.titulo}</Text>
                    <Text style={styles.liturgiaLeituras}>{l.texto}</Text>
                  </View>
                ))}
                {liturgia.leituras.salmo?.map((s, i) => (
                  <View key={i} style={{ marginBottom: 6 }}>
                    <Text style={styles.liturgiaLeituras}>
                      <Text style={{ fontWeight: "bold" }}>Salmo:</Text>{" "}
                      {s.referencia}
                    </Text>
                    <Text style={styles.liturgiaLeituras}>{s.refrao}</Text>
                    <Text style={styles.liturgiaLeituras}>{s.texto}</Text>
                  </View>
                ))}
                {liturgia.leituras.evangelho?.map((e, i) => (
                  <View key={i} style={{ marginBottom: 6 }}>
                    <Text style={styles.liturgiaLeituras}>
                      <Text style={{ fontWeight: "bold" }}>Evangelho:</Text>{" "}
                      {e.referencia}
                    </Text>
                    <Text style={styles.liturgiaLeituras}>{e.titulo}</Text>
                    <Text style={styles.liturgiaLeituras}>{e.texto}</Text>
                  </View>
                ))}
              </View>
            )}
            {/* Antífonas */}
            {liturgia.antifonas && (
              <View style={{ marginTop: 8 }}>
                <Text style={styles.liturgiaLeituras}>
                  <Text style={{ fontWeight: "bold" }}>
                    Antífona de Entrada:
                  </Text>{" "}
                  {liturgia.antifonas.entrada}
                </Text>
                <Text style={styles.liturgiaLeituras}>
                  <Text style={{ fontWeight: "bold" }}>
                    Antífona de Comunhão:
                  </Text>{" "}
                  {liturgia.antifonas.comunhao}
                </Text>
              </View>
            )}
          </View>
        ) : (
          <Text style={styles.cardText}>
            {liturgia?.erro || "Nenhuma liturgia encontrada."}
          </Text>
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
  header: {
    marginTop: 24,
    marginBottom: 8,
    alignItems: "center",
  },
  headerImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff7f4f",
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center",
  },
  calendarContainer: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 12,
    marginTop: 12,
    marginBottom: 12,
    width: "90%",
    // maxWidth: 340,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  liturgiaBox: {
    marginTop: 8,
    alignItems: "center",
  },
  liturgiaTitulo: {
    color: "#ff7f4f",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
    textAlign: "center",
  },
  liturgiaSub: {
    color: "#333",
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  liturgiaLeituras: {
    color: "#333",
    fontSize: 15,
    marginBottom: 8,
    textAlign: "center",
  },
  liturgiaEvangelho: {
    color: "#333",
    fontSize: 15,
    marginBottom: 8,
    textAlign: "center",
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 24,
    marginTop: 12,
    width: "90%",
    // maxWidth: 320,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  cardImage: {
    width: 120,
    height: 120,
    marginBottom: 16,
    resizeMode: "contain",
  },
  cardText: {
    color: "#ff7f4f",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
  },
  eventoItem: {
    marginBottom: 12,
    alignItems: "center",
  },
  eventoDia: {
    color: "#ff7f4f",
    fontWeight: "bold",
    fontSize: 15,
  },
  eventoNome: {
    color: "#333",
    fontSize: 15,
    textAlign: "center",
  },
});
