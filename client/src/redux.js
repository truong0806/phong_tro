import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';

const reducStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default reducStore;
