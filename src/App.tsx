import {Screen} from './components/Screen'
import {Header} from './components/Header'

import vitePwa from './assets/images/vite-pwa.png'

export default function App() {
    return (
        <Screen>
            <Header />

            <main 
                className='p-4 flex-1 flex flex-col items-center justify-center gap-4'
            >
                <img 
                    src={vitePwa} 
                    alt="Logo Vite PWA"
                />

                <p className='text-center text-lg text-gray-500'>
                    Template desenvolvido para aplicações web/mobile sem a utilização de código nativo.
                </p>

                <p className='underline text-center text-gray-500'>
                    Customize seu aplicativo accessando src/App.tsx
                </p>

                <div>

                </div>
            </main>

            <footer className='p-4 text-center bg-gray-100'>
                <span className='text-gray-700'>
                    Feito com ❤️ por João Alves, v{import.meta.env.PACKAGE_VERSION}
                </span>
            </footer>
        </Screen>
    )
}
