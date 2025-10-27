import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { use, useEffect, useState } from "react";

export default function CreateTask() {
  const navigation = useNavigation<any>();

  const [name, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const criarTarefa = async () => {
    try {
      const resposta = await fetch("http://172.20.86.129:3000/tarefas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, descricao}),
      });

      if(!resposta.ok){
        console.log("Erro ao criar tarefa: ", resposta);
        return
      }

      navigation.navigate("Task")
      
    } catch (e){
      console.log("houve um erro: ", e)
    }
  };

  return (
    <View style={styles.container}>
      <Text>Criar Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da tarefa"
        value={name}
        onChangeText={setNome}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Descrição da Tarefa"
        value={descricao}
        onChangeText={setDescricao}
      ></TextInput>
      <TouchableOpacity
        onPress={criarTarefa}
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
          Criar nova Tarefa +
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
