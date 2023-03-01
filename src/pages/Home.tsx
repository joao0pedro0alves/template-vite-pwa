import { MenuItem } from '../app/components/MenuItem'
import { Header } from '../app/components/Header'
import { Screen } from '../app/components/Screen'

import logoImage from '../assets/images/logo.png'
import { useAuth } from '../hooks/useAuth'

export function Home() {
    const { user } = useAuth()

    return (
        <Screen>
            <Header />

            <div className="p-4 flex-1">

                <img
                    className='w-full m-auto mb-4 max-w-[100px]' 
                    src={logoImage} 
                    alt="Logo"
                />
                <span className="mb-4 block sm:text-lg text-zinc-400 text-center">
                    Bem vindo(a) <span className='text-emerald-500 font-semibold'>{user.name}</span>, <br/> escolha uma operação.
                </span>

                <div className="flex flex-col gap-3">
                    <MenuItem to='/tools/conferencia'>Conferência</MenuItem>
                    <MenuItem to='/tools/separacao'>Separação de carga</MenuItem>
                    <MenuItem to='/' disabled>Liberação de estoque</MenuItem>
                </div>
            </div>

            <footer className="p-4 border-t border-zinc-300 bg-zinc-200 flex justify-center">
                <span className="text-xs text-center text-zinc-700">
                    © ECOSIS - EQUIPAMENTOS E CONSULTORIA EM SISTEMAS LTDA 2023
                </span>
            </footer>
        </Screen>
    )
}
