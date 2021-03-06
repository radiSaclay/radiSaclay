import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import * as storage from 'redux-storage';
import debounce from 'redux-storage-decorator-debounce';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const middleWare = [];

// Add thunk middleWare
middleWare.push(thunkMiddleware);

// Add redux store storage reducer
const wrappedReducer = storage.reducer(rootReducer);
let engine = createEngine('radiSaclay');
// Throttle save operation to every once a second at max
engine = debounce(engine, 1000);
// TODO: parameter filter to save only parts of the store
const reduxStorageMiddleware = storage.createMiddleware(engine);
middleWare.push(reduxStorageMiddleware);
const loadStore = storage.createLoader(engine);


// Add logger middleWare. This has always to be the last
middleWare.push(logger())


const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

export default function configureStore() {
	const store = createStoreWithMiddleware(wrappedReducer);
	loadStore(store)
	.then((newState) => {})
	.catch((error) => { console.log('Failed to load previous store'); })
	return store;
}
