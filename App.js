/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';

export default class App extends Component<Props> {
  render() {
    return (
      // home es un smartComponent
      <Home>
        {/* <Header>
					<Text> ola ke haces </Text>
				</Header> */}
        <Header />

        <Text>buscador</Text>
        <Text>categorias</Text>

        <SuggestionList />
      </Home>
    );
  }
}

// const App: () => React$Node = () => {
//   	return (
// 		<Text>header</Text>
// 	  	// <Home>
// 		// 	<Text>header</Text>
// 		// 	<Text>buscador</Text>
// 		// 	<Text>categorias</Text>
// 		// 	<Text>sugerencias</Text>
//     	// </Home>
//   	);
// };

// export default App;
