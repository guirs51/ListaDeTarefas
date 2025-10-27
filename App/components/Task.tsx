import { StyleSheet, Text, View } from 'react-native';


export default function Task(props: { nome: string, status: string, descricao: string }) {
    let resultado = null;

    if (props.status === "completado") {
        resultado = <Text style={{ color: "green", fontWeight: "bold" }}>{props.status}</Text>;
    } else {
        resultado = <Text style={{ color: "red", fontWeight: "bold" }}>{props.status}</Text>;
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
        width: 285,
        height:170,
        borderWidth: 2,
        borderColor: "#000000",
        backgroundColor: '#8e9e8d73',
        borderRadius: 40,
        alignContent: "center",
        alignItems: "flex-start",
        padding: 25,
        gap: 5,
        boxShadow: '1px 1px 5px #000000',
        left: 10,
        marginBottom: 15,
     
      
    },
    titulo: {
        fontSize: 20,
    }
});