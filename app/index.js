import { StyleSheet, Text, View } from "react-native";
import styles from '../estilo';
import {Link} from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Cathy</Text>
        <Text style={styles.subtitle}>Retomada da tarefa.</Text>
        <Link href={'/cadastro'}>CADASTRO</Link>     
      </View>
    </View>
  );
}


