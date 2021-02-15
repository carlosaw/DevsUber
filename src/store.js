import { createStore } from 'redux';
import {persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import Reducers from './reducers/index';
import { create } from 'react-test-renderer';

const persistedReducer = persistReducer({
    key:'root',
    storage:AsyncStorage,
    whitelist:['userReducer']
}, Reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};