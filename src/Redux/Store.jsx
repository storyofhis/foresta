import { createStore } from "redux";
import { rootReducer } from "./RootReducer";

function saveToLocal(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocal() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocal();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => saveToLocal(store.getState()));

export default store;
