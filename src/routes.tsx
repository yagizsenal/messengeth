import { Route, Switch } from 'react-router-dom'
import Main from './pages/Main'

function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact strict path="/" component={Main} />
        </Switch>
    )
}

export default Routes
