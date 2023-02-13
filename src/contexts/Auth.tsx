import { ReactNode, createContext, useState } from 'react'
import { toast } from 'react-toastify'

import { CURRENT_USER, TOKEN } from '../constants/storage'
import { api } from '../lib/axios'

export interface User {
    name: string
    supervisor: string
    operations: Record<string, boolean>
}

export interface SignInCredencials {
    username: string
    // password: string
}

interface AuthContextData {
    user: User
    loading: boolean
    signIn: (credencials: SignInCredencials) => Promise<void>
    signOut: () => void
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthProviderProps) {
    const [loading, setLoading] = useState(false)

    const [user, setUser] = useState<User>(() => {
        const storagedToken = localStorage.getItem(TOKEN)
        const storagedUser = localStorage.getItem(CURRENT_USER)

        if (storagedToken && storagedUser) {
            const user = JSON.parse(storagedUser)
            const token = JSON.parse(storagedToken)
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            return user as User
        }

        return {} as User
    })

    async function signIn({ username }: SignInCredencials) {
        setLoading(true)

        try {

            const response = await api.post('/session', { cod_funcionario: username })
            const {jwtoken, ...user} = response.data.auth_token

            localStorage.setItem(TOKEN, JSON.stringify(jwtoken))
            localStorage.setItem(CURRENT_USER, JSON.stringify(user))

            api.defaults.headers.common['Authorization'] = `Bearer ${jwtoken}`
            setUser(user)

        } catch (error) {
            toast.error(`Falha no login: ${error}`)
        } finally {
            setLoading(false)
        }
    }

    function signOut() {
        localStorage.removeItem(TOKEN)
        localStorage.removeItem(CURRENT_USER)
        setUser({} as User)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
