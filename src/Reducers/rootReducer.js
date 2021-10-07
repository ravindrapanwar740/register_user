import {combineReducer} from 'react-redux'

const rootReducer=combineReducer({
product:productReducer,
cart:cartReducer

})