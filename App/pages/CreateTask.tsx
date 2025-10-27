import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CreateTask() {
     const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text>Criar Tarefa</Text>
      <TextInput style={styles.input} placeholder="Nome da tarefa"></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Descrição da Tarefa"
      ></TextInput>
      <TouchableOpacity
        onPress={() => navigation.navigate("Task")}
        style={{
          backgroundColor: "#00b7ff70",
          padding: 10,
          borderRadius: 10,
          width: 200,
          height: 45,
          alignItems: "center",
          top: 50,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 15 }}>
          Criar nova Tarefa +{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "#130b0b09",
    borderRadius: 10,
    padding: 10,
  },
});
