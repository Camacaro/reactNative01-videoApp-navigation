import { createStore } from "redux";
import reducer from "./reducers/video";

const store = createStore( reducer, {} );

export default store;