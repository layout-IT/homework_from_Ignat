import {createStore, combineReducers} from "redux"
import {loadingReducer} from "./loadingReducer";

export let reducer = combineReducers({
    loadingReducer
})

export type stateType = ReturnType<typeof reducer>

export let store = createStore(reducer)

// @ts-ignore
window.store = store
