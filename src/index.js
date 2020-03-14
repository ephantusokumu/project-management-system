import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import {createFirestoreInstance,getFirestore} from 'redux-firestore'
// import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
 
const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
    // createFirestoreInstance(fbConfig),
    // ReactReduxFirebaseProvider(fbConfig)
    )
    );
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
 