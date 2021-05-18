import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'

function Routes() {
    return(
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
        </Switch>
    )
}

export default Routes;