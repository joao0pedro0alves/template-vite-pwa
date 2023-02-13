import { FormEvent } from 'react'
import { CaretRight } from 'phosphor-react'
import { TextField } from '../app/components/TextField'
import { useAuth } from '../hooks/useAuth'
import { SignInCredencials } from '../contexts/Auth'

export function Login() {
    const {signIn} = useAuth()

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const values = Object.fromEntries(formData) as unknown as SignInCredencials

        signIn({username: values.username})
    }

    return (
        <div className="w-screen h-screen m-auto max-w-lg flex items-center justify-center">
            <div className="bg-white h-full w-full max-h-[400px] max-w-[400px] shadow-none sm:shadow-lg rounded-none sm:rounded-lg p-8">

                <span className='block text-center text-2xl font-bold'>COLETOR</span>
                <span className='block text-sm mt-4 text-zinc-400'>Bem vindo novamente. Preencha os dados abaixo para logar.</span>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                    <TextField 
                        name='username'
                        type='text'
                        id='username'
                        placeholder='Usuário'
                        defaultValue='0104005106'
                    />
                    <TextField 
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Senha'
                        disabled
                    />
                    <button 
                        type='submit'
                        className='bg-emerald-500 text-white p-3 rounded-sm font-semibold transition-colors hover:bg-emerald-600 flex justify-center items-center gap-4'
                    >
                        ENTRAR
                        <CaretRight 
                            weight='bold'
                        />
                    </button>
                </form>
            </div>
        </div>
    )
}
