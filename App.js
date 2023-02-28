import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
export default function App() {
  const tasks = [
    {nome: "Luiza", idade: 17},
    {nome: "Camila", idade: 16},
    {nome: "Elias", idade: 15},
    {nome: "Vini", idade: 13},
    {nome: "Davi", idade: 12},
  ];
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
