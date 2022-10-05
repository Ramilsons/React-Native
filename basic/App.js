
import { StyleSheet, Text, View } from 'react-native';
import ClassComponent from './components/class/Class';
import FunctionComponent from './components/function/Function';

export default function App() {
  return (
    <View style={styles.container}>
      <ClassComponent message="Oi, componente de classe!"></ClassComponent>
      <FunctionComponent message="Oi, componente de função!"></FunctionComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
