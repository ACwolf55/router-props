import React, { Component } from 'react';

export default class extends Component {

 render() { 
  console.log(this.props)

  return (
   <div>
    This is the Card component
  
     {/* <h1>{this.props.location.state}</h1> */}
     

    <br></br>
    <p>{JSON.stringify(this.props)}</p>
   </div>
  )
 }
}


//example of the router props

// "history":{
// 	    "length":4,
// 	    "action":"PUSH",
// 	    "location":{
// 		    "pathname":"/card",
// 		    "state":"banana",
// 		    "search":"",
// 		    "hash":""
//       }
// 	},
// 	"location":{
// 		"pathname":"/card",
// 		"state":"banana",
// 		"search":"",
// 		"hash":""
//   },
// 	"match":{
// 		"path":"/card",
// 		"url":"/card",
// 		"isExact":true,
// 		"params":{}
// 	  }
// }
