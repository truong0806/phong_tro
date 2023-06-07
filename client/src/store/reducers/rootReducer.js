import authReducer from './authReducer'
import userReducer from './userReducer'
import postReducer from './postReducer'
import appReducer from './appReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import { combineReducers } from 'redux'

const authConfig = {
  storage: storage,
  key: 'auth',
  whitelist: ['isLoggedIn', 'token'],
  stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
  post: postReducer,
  app: appReducer,
})

export default rootReducer
