import { Button } from '../app/components/Button'
import { Header } from '../app/components/Header'
import { Screen } from '../app/components/Screen'

import logoImage from '../assets/images/logo.png'

export function Home() {
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
                    Bem vindo(a) <span className='text-emerald-500 font-semibold'>Gilmar Pereira</span>, escolha uma operação.
                </span>

                <div className="flex flex-col gap-3">
                    <Button>Conferência</Button>
                    <Button>Separação de carga</Button>
                    <Button disabled>Liberação de estoque</Button>
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
