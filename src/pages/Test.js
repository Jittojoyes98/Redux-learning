// explaining how redux works
// in react we need to use react-redux instead

// within the Store there exist state,dispatcher and subscriber
// Now during creation of the store we should specify the reducer function
// 

import { createStore } from "redux";
const initialState={
    value:0
}
function appReducer(previousState=initialState,action){
    switch (action.type) {
        case 'increment':
            return {
                ...previousState,
                value:previousState.value+1
            }
        case 'decrement':
            return{
                ...previousState,
                value:previousState.value-1
            }
        default:
            return previousState
    }
}
const store=createStore(appReducer) // here we need to specify the reducer
const state=store.getState()
// console.log(store.getState())
if(document){
    document.getElementById('value').innerHTML=store.getState().value
    // how things work when increment and decrement is done.
    
    // subscribe is the most important part. it is called when the state is changed and thus it is automatically called 
    
    store.subscribe(()=>{
        document.getElementById('value').innerHTML=store.getState().value
    })
    
    document.getElementById('increment').onclick=()=>{
        store.dispatch({
            type:"increment"
        })
        // console.log(store.getState()) change is reflected here
    }
    
    document.getElementById('decrement').onclick=()=>{
        store.dispatch({
            type:"decrement"
        })
        // console.log(store.getState()) change is reflected here
    
    }
}

// This wont work because of componentdid mount problem and its just redux and vannilla js





