import React, {useState} from 'react'
import {connect} from 'react-redux'
import { buyCake  } from '../redux'
function NewCakeContainer(props) {
  const [number,setNumber] = useState(1)
  return (
    <div>
      <h2>Number of Cakes - { props.numOfCakes }</h2>
      <input type = "text" value = {number} onChange={ e => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy {number} cakes</button>
    </div>
  )
}

/*
    First Step  
    ==> In Larger Applications we create Selectors to choose only those params which are required
    ==> When you want to access redux store inside your component you define this function
*/
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

/* 
    Second Step
    ==> This function maps the Action Creator to the props in our component
*/
const mapDispatchToProps = dispatch => {
    return {
        buyCake : number => dispatch(buyCake(number))
    }
}


/* 
    Third Step 
    Connect function connects the react component to the redux store
*/
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(NewCakeContainer)




