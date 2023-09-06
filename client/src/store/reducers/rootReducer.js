import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import postReducer from './postReducer';
import appReducer from './appReducer';
import provincesReducer from './provincesReducer';

const authConfig = {
  storage,
  key: 'auth',
  whitelist: ['isLoggedIn', 'accessToken', 'refreshToken'],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
  post: postReducer,
  app: appReducer,
  provinces: provincesReducer,
});

export default rootReducer;
