import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"; // 👈 importa o degradê

export default function CreateTask() {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={["#62a56b", "#a3d9b1"]} // degradê vertical
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Criar Tarefa</Text>

        <TextInput style={styles.input} placeholder="Nome da Tarefa" />
        <TextInput
          style={styles.input}
          placeholder="Descrição da Tarefa"
          multiline
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Task")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Criar nova Tarefa +</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000ff",
  },
  input: {
    width: 260,
    height: 45,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#3b3b3b30",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3, 
  },
  button: {
    backgroundColor: "#3a6b40",
    padding: 12,
    borderRadius: 10,
    width: 220,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    top: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});