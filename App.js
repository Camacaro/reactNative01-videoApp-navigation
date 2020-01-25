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
import {store, persistor} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './src/sections/components/loading';


export default class App extends Component<Props> {

	state = {
		// suggestionList: [],
		// categoryList: []
	}

	// Al entrar cargar esto
	async componentDidMount(){
		const categoryList = await API.getMovies();

        store.dispatch({
            type: 'SET_CATEGORY_LIST',
            payload: {
                categoryList
            }
        });

		const suggestionList = await API.getSuggestion( 10 );

        store.dispatch({
            type: 'SET_SEGGESTION_LIST',
            payload: {
                suggestionList
            }
        });

        // this.setState({
		// 	suggestionList: movies,
		// 	categoryList: categories 
		// }) ;
	}

  	render() {
    return (
        <Provider
            store = { store }
        >
            <PersistGate 
                loading = { <Loading /> }
                persistor = { persistor }
            >

                {/* // home es un smartComponent */}
                <Home>
                    <Header />
                    <Player />
                    <Text>buscador</Text>
                    <CategoryList />
                    <SuggestionList />
                </Home>

            </PersistGate>
        </Provider>
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
