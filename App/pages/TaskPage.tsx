import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Task from '../components/Task';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';


export default function TaskPage() {
    const navigation = useNavigation<any>();

    const [tarefas, setTarefas] = useState<any[]>([]);

    useEffect(() => {
        // Criamos uma função assíncrona dentro do useEffect
        const buscarUsuarios = async () => {
            try {
                console.log("Buscando dados da API...");

                // Faz a requisição e aguarda a resposta
                const resposta = await fetch("https://jsonplaceholder.typicode.com/todos");

                // Converte a resposta para JSON
                const dados = await resposta.json();

                // Atualiza o estado com os dados recebidos
                setTarefas(dados);
            } catch (erro) {
                // Captura e mostra erros, se houver
                console.error("Erro ao buscar usuários:", erro);
            }
        };

        // Chama a função assíncrona
        buscarUsuarios();
    }, []);


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Lista de Tarefas</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Create")}
                    style={{ backgroundColor: '#00b7ff70', padding: 10, borderRadius: 10, width: 200, height: 45, alignItems: "center", top: 150 }}
                >
                    <Text style={{ color: '#fff', fontSize: 15 }}>Criar nova Tarefa   + </Text>
                </TouchableOpacity>

                <View style={styles.tasks}>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollTask}>
                        <View style={styles.headerTasks}>
                            <Text style={styles.taskTitle}>Tarefas</Text>
                        </View>
                        <View style={styles.gapTask}>
                            <FlatList
                                data={tarefas}
                                keyExtractor={(item) => item.id.toString()} // chave única
                                renderItem={({ item }) => (
                                    <>
                                        <Task nome="limpar a casa" status={item.completed ? "completado" : "não completado"} descricao={item.title} />
                                    </>
                                )}
                            />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#109de9ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        color: "white"
    },
    tasks: {
        width: 420,
        height: 500,
        position: 'relative',
        top: 200,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    scrollTask: {
        width: 300,
    },
    gapTask: {
        gap: 20
    },
    headerTasks: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    taskTitle: {
        fontSize: 26
    }
});
