// in store in react we describe store,initialstate,reducer and export it after that

import {combineReducers, createStore} from 'redux'

// const initialState={
//     value:0,
//     label:false
// }
 
// we can combine different values of the state objects. for that we can use useCombiners
//  we can combine them by our own method also by using combiners too
// so that we dont need to write appReducer 

// function appReducer(previousState=initialState,action){
//     switch (action.type) {
//         case 'increment':
//             return {
//                 ...previousState,
//                 value:previousState.value+1
//             }
//         case 'decrement':
//             return{
//                 ...previousState,
//                 value:previousState.value-1
//             }
//         case 'show-label':
//             return {
//                 ...previousState,
//                 label:action.payload
//             }
//         default:
//             return previousState
//     }
// }


// const appReducer=(previousState=initialState,action)=>{
//     return {
//         value:valueReducer(previousState.value,action),
//         label:labelReducer(previousState.label,action)
//     }
// }

const valueReducer=(previousState=0,action)=>{
    switch (action.type) {
        case 'increment':
            return previousState+1
        case 'decrement':
            return previousState-1
        default:
            return previousState
    }
}

const labelReducer=(previousState=false,action)=>{
    switch (action.type) {
        case 'show-label':
            return action.payload
        default:
            return previousState
    }
}
const appReducer=combineReducers({
    value:valueReducer,
    label:labelReducer,
})
const store=createStore(appReducer)

export default store