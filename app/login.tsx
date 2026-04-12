import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router' // Importa o Link para o texto Não tem conta? Cadastre-se

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

        <Link href="/esqueci-senha" style={styles.linkEsqueci}>
        <Text style={styles.linkEsqueciText}> Esqueci minha senha</Text>
        </Link>
        

        {/* 4. Botão de Login */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        {/* 5.  Link para Cadastro */}
        <Link href="/cadastro"style={styles.linkContainer}>
          <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
        </Link>
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
    marginBottom: 13,
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
  linkEsqueci: {
    alignSelf: 'flex-end',   // Joga o componente todo para a direita
    marginTop: -11,          // Valor negativo faz ele "subir" e colar no input
    marginBottom: 17,        // Dá um espaço para o botão de Entrar não ficar colado
    marginRight: 10,          // Pequeno recuo da borda direita
  },
  linkEsqueciText: {
    color: '#007AFF',        // A cor azul que você definiu no seu guia
    fontSize: 14,            // Tamanho menor para não brigar com o botão principal
    fontWeight: '400',       // Deixa a letra levemente mais grossinha
  },
  linkContainer: {
    marginTop: 17,
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
  },
});
