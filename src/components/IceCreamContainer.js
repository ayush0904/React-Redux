import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream  } from '../redux'
function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Creams - { props.numOfIceCreams }</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
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
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

/* 
    Second Step
    ==> This function maps the Action Creator to the props in our component
*/
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}


/* 
    Third Step 
    Connect function connects the react component to the redux store
*/
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(IceCreamContainer)




