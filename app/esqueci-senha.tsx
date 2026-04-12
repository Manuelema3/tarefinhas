import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function EsqueciSenha() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../src/assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Recuperar Senha</Text>
      
      <Text style={styles.instrucoes}>
        Digite seu e-mail cadastrado para receber as instruções de recuperação.
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="Seu e-mail"
        keyboardType="email-address"
        placeholderTextColor="#666"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar Link</Text>
      </TouchableOpacity>

      {/* Removi o style do Link e deixei apenas no Text para não dar erro */}
      <Link href="/login">
        <Text style={styles.linkText}>Voltar para o Login</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'flex-start', 
    paddingTop: 120, 
    alignItems: 'center', // Alinha a logo e os textos no centro
  },
  logo: {
    width: 150,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  instrucoes: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginBottom: 30,
    paddingHorizontal: 14,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007AFF',
    fontSize: 15,
    marginTop: 10,
  },
});