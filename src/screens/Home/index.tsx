import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {
  const participants = ['William', 'Jefferson', 'Ryan', 'Crislan', 'Rayssa', 'Ben', 'Lavínia', 'Sophie', 'Christopher', 'Valentina', 'Mamãe'];
  
  function handleParticipantAdd() {
    console.log('Adicionar novo participante');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 12 de maio de 2023
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} >
        {participants.map(participant => (
          <Participant 
            key={participant}
            name={participant} 
            onRemove={() => handleParticipantRemove(participant)} />
        ))}
      </ScrollView>
    </View>
  );
} 