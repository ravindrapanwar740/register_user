import { createStore } from 'redux'
import rootRouter from './Reducers/rootReducer'


const store=createStore(rootReducer);

export default store