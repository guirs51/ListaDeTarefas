import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Animated } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Task from '../components/Task';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import Animation from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";





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

  
    }

    return (
       
        
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>


                <Text style={styles.title}>Lista de Tarefas</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Create")}
                    style={{ backgroundColor: '#ffffffa4', padding: 10, borderRadius: 10, width: 200, height: 45, alignItems: "center", top: 150 , borderColor: '#000000', borderWidth: 1}}
                >
                    <Text style={{ color: '#000000ff', fontSize: 15 }}>Criar nova Tarefa   + </Text>
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
                                        <Task  nome="limpar a casa" status={item.completed ? "completado" : "não completado"} descricao={item.title} />
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
        backgroundColor: '#62a56bff',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    title: {
        fontSize: 28,
        fontFamily: "Poppins_700Bold",
        position: 'relative',
        top: 100,
        color: '#000000',

    },
    tasks: {
        width: 420,
        height: 500,
        position: 'relative',
        top: 200,
        borderRadius: 70,
       
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        borderColor: '#000000',
        borderWidth: 3,
        boxShadow: '2px 2px 10px #000000',
        
        


    },
    scrollTask: {
        width: 300,
    },
    gapTask: {
        gap: 20,
       
    },
    headerTasks: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    taskTitle: {
        fontSize: 21,
        fontFamily: "Poppins_700Bold",

    },
  
});
