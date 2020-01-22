/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';
import Video from 'react-native-video';
import Player from './src/player/containers/player';

export default class App extends Component<Props> {

	state = {
		suggestionList: [],
		categoryList: []
	}

	// Al entrar cargar esto
	async componentDidMount(){
		const movies = await API.getSuggestion( 10 );
		const categories = await API.getMovies();

		console.log(categories);
		 
		this.setState({
			suggestionList: movies,
			categoryList: categories 
		}) ;
	}

  	render() {
    return (
      	// home es un smartComponent
		<Home>
			{/* <Header>
						<Text> ola ke haces </Text>
					</Header> */}
			<Header />
			
			{/* <View style={{
				flex: 1,
				height: 100,
			}}>
				<Video 
					source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} 
					style={{
						position: 'absolute',
						left: 0,
						right:0,
						bottom: 0,
						top: 0
					}}
					
					resizeMode='contain'
				/>
			</View> */}
			<Player />

			<Text>buscador</Text>

			<CategoryList list={this.state.categoryList} />

			<SuggestionList list={this.state.suggestionList} />
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
