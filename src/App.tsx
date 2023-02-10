import { Divider } from './app/components/Divider'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export default function App() {
    return (
        <main>
            <Login />
            <Divider />
            <Home />
        </main>
    )
}
