import rootReducer from './store/reducers/rootReducer';
import { persistStore } from 'redux-persist';
import { createStore } from 'redux';

const reducStore = () => {
    let store = createStore(rootReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}

export default reducStore

