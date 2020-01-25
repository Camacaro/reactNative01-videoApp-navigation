import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import reducer from "./reducers/video";
// deprecado
//import storage from 'redux-persist/lib/storage';
// import { AsyncStorage } from "react-native";
// ahora es asi
import AsyncStorage from '@react-native-community/async-storage';


// const store = createStore( reducer, {
//     suggestionList: [],
//     categoryList: []
// } );

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
// Se usa persistor porque lo queremos unir a react, ya que el redux lo podemos usar sin react  
const persistor = persistStore(store);


export {store, persistor};