import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup';

function Routes() {
    return(
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>

            <Route path="/signup">
                <Signup></Signup>
            </Route>


        </Switch>
    )
}

export default Routes;