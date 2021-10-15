import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const enhancer =  composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, enhancer);