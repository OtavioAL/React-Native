# 🚀 Ignite Gym - React Native

<p align="center">
  <img src="./images/cover.png" alt="Capa do Ignite Gym" width="600">
</p>

O **Ignite Gym** é uma aplicação de gerenciamento de treinos para academia, desenvolvida com **React Native**, que oferece controle completo sobre os exercícios e seu progresso.

---

## 💻 Sobre o Projeto

O Ignite Gym foi criado para ajudar usuários a organizarem seus treinos e acompanharem sua evolução com facilidade. A aplicação consome uma API em **Node.js**, que fornece uma ampla variedade de exercícios, divididos por categorias.

### Funcionalidades:

- **Catálogo de Exercícios:** Pesquise e filtre exercícios por categoria.
- **Histórico de Treinos:** Marque exercícios como realizados e acompanhe seu progresso.
- **Sistema de Autenticação:** Cadastro e login de usuários utilizando **tokens JWT**.
- **Gerenciamento de Perfil:** Atualize senha e avatar do usuário.
- **Persistência de Dados:** Uso do **Async Storage** para manter os dados salvos entre sessões.

---

## 🎨 Layout

<p align="center">
  <img src="./images/layout_example.png" alt="Exemplo de Layout" width="600">
</p>

O design foi pensado para proporcionar uma experiência intuitiva e responsiva, utilizando **Gluestack** e **Expo Google Fonts** para estilização.

---

## 🛠 Tecnologias Utilizadas

O projeto faz uso de tecnologias e ferramentas modernas para garantir escalabilidade, eficiência e uma excelente experiência de usuário:

- **[React Native](https://gluestack.io/)**: Framework principal para desenvolvimento mobile.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática.
- **[Phosphor Icons](https://phosphoricons.com/)**: Conjunto de ícones flexíveis.
- **[NativeBase](https://nativebase.io/)**: Biblioteca de UI para React Native.
- **[Async Storage](https://reactnative.dev/docs/asyncstorage)**: Armazenamento local persistente.
- **[React Navigation](https://reactnavigation.org/)** e **[Native Stack](https://reactnavigation.org/docs/native-stack-navigator/)**: Navegação multi-telas.
- **[Expo Google Fonts](https://github.com/expo/google-fonts)**: Fontes customizadas.
- **[Axios](https://axios-http.com/ptbr/docs/intro)**: Cliente HTTP para consumir APIs.
- **[React Hook Form](https://www.react-hook-form.com/)** e **[Yup](https://github.com/jquense/yup)**: Gerenciamento e validação de formulários.
- **[Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)**: Seleção de imagens locais.
- **[React Navigation Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)**: Navegação por abas.

---

## 🚀 Como Executar o Projeto

### 1. Clonando o Repositório

Clone o projeto para o local desejado:

```bash
$ git clone git@github.com:andreviapiana/IgniteGym.git
```

### 2. Executando o Back-end

Navegue até o diretório da API e instale as dependências:

```bash
$ cd api
$ npm install
$ npm run start
```

O servidor será iniciado na porta `3333` com a mensagem: "Server is running on Port 3333".

### 3. Executando o Front-end

Com o back-end em execução, abra um novo terminal e inicie o app:

```bash
$ cd mobile
$ npm install
$ npm run start
```

Um QR Code será exibido. Siga os passos abaixo:

1. Instale o **Expo Go** no seu dispositivo (disponível na Play Store).
2. Escaneie o QR Code usando o aplicativo Expo Go.
3. A aplicação será exibida no seu dispositivo, pronta para uso!

---

## 📢 Contribuições e Feedback

Contribuições e feedback são sempre bem-vindos! Se tiver sugestões de melhorias ou novos recursos, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Aproveite o Ignite Gym para organizar seus treinos e acompanhar seu desempenho! 💪
