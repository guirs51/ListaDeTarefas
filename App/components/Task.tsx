import { StyleSheet, Text, View } from 'react-native';

export default function Task(props: { nome: string, status: string, descricao: string }) {
    let resultado = null;

    if (props.status === "completado") {
        resultado = <Text style={{ color: "green" }}>{props.status}</Text>;
    } else {
        resultado = <Text style={{ color: "red" }}>{props.status}</Text>;
    }

    return (
        <View style={styles.task}>
            <Text style={styles.titulo}>{props.nome}</Text>
            <Text>{props.descricao}</Text>
            {resultado}
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        width: 300,
        height: 120,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "#4d3e3e13",
        borderRadius: 40,
        alignContent: "center",
        alignItems: "flex-start",
        padding: 15,
        gap: 5,
    },
    titulo: {
        fontSize: 20,
    }
});