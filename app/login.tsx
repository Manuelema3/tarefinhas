import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* 1. Logo do Tarefinhas*/}
        <Image 
          source={require('../src/assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        {/* 2. Slogan ada aplicação próxima da Logo */}
        <Text style={styles.title}>Pequenos Lembretes</Text>
        <Text style={styles.subtitle}>Grandes Conquistas</Text>
      </View>

      {/* 3. Inputs/ Campos de entrada e Botão subirão juntos */}
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput 
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />

        {/* 4. Botão de Login */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        {/* 5.  Link para Cadastro */}
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'flex-start', // Faz tudo começar do topo
    paddingTop: 120, // Controla o quanto a logo sobe
  },
  header: {
    alignItems: 'center',
    marginBottom: 60, // Espaço entre o slogan e o primeiro input
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: -5, // Aproxima o título da logo
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: -2, // "Cola" o subtítulo no título
  },
  form: {
    width: '100%',
    alignItems: 'center',
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
