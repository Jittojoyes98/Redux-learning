import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import './pages/Test' this is completely optional as it won't work

// note that we are using useSelector and useDispatcher as redux hooks

// useSelector is used to get acess to the whole state .useSelector can return  the required part of the 
// state that we want.

function App() {
  const value=useSelector((state)=>{
    return state.value
  })
  // console.log(value)
  const dispatch=useDispatch()

  const handleChange=(e)=>{
    const changedValue=e.target.checked
    dispatch({
      type:'show-label',
      payload:changedValue,
    })
  }

  // always take data from the state
  const checkValue=useSelector((state)=>{
    return state.label
  })
  return (
    <>
      <input type='checkbox'onChange={handleChange} checked={checkValue}/>
      <label>Show data</label>
      <h1>Hiii</h1>
      <button onClick={()=>{
        dispatch({
          type:'increment'
        })
      }}>Increment</button>
      <label id='value'>{value}</label>
      <button onClick={()=>{
        dispatch({
          type:'decrement'
        })
      }}>Decrement</button>
      <br/>
      {
        checkValue ? <button style={{"backgroundColor":"red"}}>Show hided data</button> : <button style={{"backgroundColor":"green"}}>No data to show</button>
      }
    </>
  );
}

export default App;
