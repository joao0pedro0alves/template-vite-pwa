import { SignOut } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'

export function Header() {
    const { signOut } = useAuth()

    return (
        <header className="bg-zinc-100 py-2 px-4 flex items-center justify-between">
            <button className="h-10 w-10 rounded-full overflow-hidden object-cover">
                <img
                    className="w-full"
                    src="https://gitlab.com/uploads/-/system/user/avatar/1149402/avatar.png?w=123"
                    alt="Jhon doe"
                />
            </button>

            <button
                onClick={signOut}
            >
                <SignOut
                    className="hover:text-zinc-500"
                    weight="bold"
                    size={20}
                />
            </button>
        </header>
    )
}
