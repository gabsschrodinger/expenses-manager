import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const mainGroups = [
    {
      main: "Revenue",
      subGroups: ["Salary", "Other"]
    },
    {
      main: "Expenses",
      subGroups: ["Food", "Transport", "Other"]
    },
    {
      main: "Investments",
      subGroups: ["Stocks", "Crypto", "Other"]
    },
    {
      main: "Balance",
      subGroups: []
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses for Jan / 2024</Text>

      <View style={styles.expenseContainer}>
        {mainGroups.map((group, index) => (
          <View key={index} style={styles.rowContainer}>
            <Text style={styles.text}>{group.main}</Text>
            <Text style={styles.text}>$0.00</Text>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 17,
    color: '#fff',
  },
  expenseContainer: {
    marginTop: 10,
    width: '80%',
    backgroundColor: '#354F52',
    borderRadius: 10,
    padding: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
