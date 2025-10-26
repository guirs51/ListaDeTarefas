import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Task from '../components/Task';

export default function TaskPage() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Seu nome</Text>
                <View style={styles.tasks}>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollTask}>
                            <View style={styles.headerTasks}>
                                <Text style={styles.taskTitle}>Task</Text>
                            </View>
                        <View style={styles.gapTask}>
                            <Task nome="limpar a casa" status='completado' descricao="lavar a louça, limpar o banheiro." />
                            <Task nome="limpar a casa" status='completado' descricao="lavar a louça, limpar o banheiro." />
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
        fontSize: 30
    }
});
