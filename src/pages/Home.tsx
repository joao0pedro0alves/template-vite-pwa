import { Button } from '../app/components/Button'
import { Header } from '../app/components/Header'

import logoImage from '../assets/images/logo.png'

export function Home() {
    return (
        <div className="flex flex-col w-screen h-screen m-auto max-w-lg bg-white sm:border sm:border-zinc-300 shadow-lg overflow-hidden">
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
                <span className="text-xs text-center text-zinc-800">
                    © ECOSIS - EQUIPAMENTOS E CONSULTORIA EM SISTEMAS LTDA 2023
                </span>
            </footer>
        </div>
    )
}
