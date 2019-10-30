import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import books from "./reducers/books"
const reducer=combineReducers({
    books,
})
const store=createStore(reducer,applyMiddleware(reduxThunk))
export default store;