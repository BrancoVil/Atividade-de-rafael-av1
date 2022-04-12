import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import Title_Media from './src/components/Title_media/index'
import Title_Valores from './src/components/Title_valores/index'
import Header from './src/components/Header/index'

import Form_media from './src/content/Form_media/index'
import Form_valores from './src/content/Form_valores/index'
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
  
    <ScrollView style={styles.container}>
      
      <Header/>

      <Title_Media/>

      <Form_media/>

      <Title_Valores/>

      <Form_valores/>
      
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
