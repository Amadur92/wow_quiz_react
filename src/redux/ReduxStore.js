import {combineReducers, legacy_createStore as createStore} from "redux"
import contentReducer from "./ContentPageReducer"
import dialogsReducer from "./DialogsPageReducer"
import navbarReducer from "./NavbarPageReducer"
import tableReducer from "./TablePageReducer"

let reducers = combineReducers({
    contentReducer,
    dialogsReducer,
    navbarReducer,
    tableReducer

})


let store = createStore(reducers)

export default store

