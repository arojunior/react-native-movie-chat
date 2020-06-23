# React Native App / fetching movies and writing comments about it

> App created using [Expo](https://expo.io/)

**Running**

```sh
yarn # to install the dependencies
yarn start # to run the expo server
```

Now you are able to scan the QR Code and run using a mobile or simply run on iOS/Android simulator

**Architecture**

I've written an article some time ago explaining the pattern that I used in this project:

`Achieve the power of React hooks and composition:`
[Medium](https://medium.com/@arojunior/achieve-the-power-of-react-hooks-and-composition-2de6c9ee4706) | [dev.to](https://dev.to/arojunior/achieve-the-power-of-react-hooks-and-composition-1ffo)

Basically: 
- components are always just presentational and pure
- containers are responsible for simple behaviors and states
- services are used to perform complex tasks like to process data or http/io requests

Following this approach we can easily reuse all the components, containers and services