import { Switch,Route } from 'react-router-dom'
import Card from './components/Card'
import Home from './components/Home'

export default (

<Switch>
    <Route exact path ='/' component={Home}/>
    <Route exact path ='/card' component={Card}/>

</Switch>

)