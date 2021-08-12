import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Card from './Card';

export default class Home extends Component {

state = {
 cat: "banana",
 dog: "apple"
}

 render() {
  return (
   <>
  
   <Card cat={this.state.cat} />

   
   <Link to={
    {
    pathname: '/card',
    state: this.state.cat
   }
  }
   >Click Here to show the Card component</Link>
   </>
  )
 }
}
