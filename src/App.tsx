import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContextProvider } from './contexts/Auth'
import { Routes } from './routes'

export default function App() {
    return (
        <Router>
            <AuthContextProvider>
                <main>
                    <Routes />
                </main>
            </AuthContextProvider>
        </Router>
    )
}
