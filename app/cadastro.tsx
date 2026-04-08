import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router' // Importa o Link para o texto Não tem conta? Cadastre-se

export default function Cadastro() {
  return (
    <View style={styles.container}>
        {/* Título da Tela */} 
        <Text style={styles.title}>Criar Conta</Text>

        {/* Inputs com 4 campos de preenchimento */}
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry={true} />

      {/* Botão de Cadastrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Link para voltar caso já tenha conta */}
      <Link href="/login" style={styles.linkContainer}>
        <Text style={styles.linkText}>Já tem conta? Entre aqui</Text>
      </Link>
    </View>
  );
}

// Aproveitando os mesmos estilos da tela Login para manter o padrão!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'center', // Centraliza os campos no cadastro
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 15,
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
  },
});