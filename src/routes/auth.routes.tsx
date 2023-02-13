import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from '../pages/Login'

export function AuthRoutes() {
    return (
        <Switch>
            <Route path="/login" component={Login} exact />
            <Route path='*' component={() => <Redirect to='/login' />} />
        </Switch>
    )
}
