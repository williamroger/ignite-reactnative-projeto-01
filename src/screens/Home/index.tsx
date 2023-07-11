import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {
  function handleParticipantAdd() {
    console.log('adicionar novo participante');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 12 de maio de 2023
      </Text>
      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
} 