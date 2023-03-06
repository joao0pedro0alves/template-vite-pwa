import { SignOut } from 'phosphor-react'

export function Header() {

    return (
        <header className="bg-zinc-100 py-2 px-4 flex items-center justify-between">
            <button className="h-10 w-10 rounded-full overflow-hidden object-cover">
                <img
                    className="w-full"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    alt="Jhon doe"
                />
            </button>

            <button
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
