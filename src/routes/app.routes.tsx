import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Conference } from '../pages/tools/Conference'

export function AppRoutes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/tools/conferencia" component={Conference} exact />
            <Route path='*' component={() => <Redirect to='/' />} />
        </Switch>
    )
}
