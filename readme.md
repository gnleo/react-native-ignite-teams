### Projeto IgniteTeams

Este projeto utiliza `nodeJS v18.12.0` e `npm v8.19.2` e configurado com template `Blank with Typescript`.

```bash
npx create-expo-app igniteteams --template
```

Dependências

```bash
# simplifica os path de importação, através de um mapeamento realizado nos arquivos `babel.config.js` e `tsconfig.json`
npm i babel-plugin-module-resolver
# executa a estilização do projeto
$ npm i styled-components
# utilizando fontes externas
npx expo install expo-font @expo-google-fonts/roboto
# biblioteca de ícones
npm i phosphor-react-native
# plugin para utilização de imagens svg
npx expo install react-native-svg
```

Dependências de desenvolvimento

```bash
npm i @types/styled-components @types/styled-components-react-native -D
```
