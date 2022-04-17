import { createStore } from "redux";
import { collectionReducer } from "./collectionReducer";

let store = createStore(collectionReducer);

export default store;