import { StyleSheet, Text, View } from 'react-native';

export default function Task(props: { nome: string, status: string, descricao: string }) {
    return (
        <View style={styles.task}>
            <Text style={styles.titulo}>{props.nome}</Text>
            <Text>{props.descricao}</Text>
            <Text style={styles.status}>{props.status}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        width: 300,
        height: 120,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#120808ff",
        backgroundColor: "#a79a9a13",
        alignContent: "center",
        alignItems: "flex-start",
        padding: 15,
        gap: 5,

},
    titulo: {
    fontSize: 20,
},
    status: {
    color: "green"
}

});