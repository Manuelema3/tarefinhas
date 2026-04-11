// src/styles/theme.ts

export const theme = {
  // 1. Cores de Estrutura (Botões, Fundos, Bordas)
  colors: {
    primary: "#007AFF",
    background: "#FFFFFF",
    inputBackground: "#F5F5F5",
    border: "#DDDDDD",
    white: "#FFFFFF",
    error: "#FF3B30",
  },

  // 2. Tipografia (Tudo sobre o texto: Tamanho, Cor e Peso)
  typography: {
    size: {
      title: 24,
      subtitle: 18,
      body: 16,
      small: 12,
    },
    colors: {
      primary: "#333333", // Texto principal (quase preto)
      secondary: "#666666", // Texto secundário (cinza)
      link: "#007AFF", // Cor para "Esqueci minha senha"
      white: "#FFFFFF", // Texto dentro de botões coloridos
    },
    weight: {
      bold: "bold" as const,
      regular: "normal" as const,
    },
  },

  // 3. Métricas (Medidas de espaçamento e arredondamento)
  metrics: {
    padding: 20,
    radius: 8,
    inputHeight: 50,
    buttonHeight: 50,
  },
};
