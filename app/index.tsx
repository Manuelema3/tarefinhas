import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function BemVindo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Tarefinhas</Text>
      <Text style={styles.subtitle}>Sua organização começa aqui.</Text>

      {/* Este Link procura um arquivo chamado login.tsx na pasta app */}
      <Link href="/login" style={styles.button}>
        <Text style={styles.buttonText}>Começar</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF', // Azul padrão
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});


