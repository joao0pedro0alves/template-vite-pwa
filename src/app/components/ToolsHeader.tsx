import { CaretLeft, ChatCircle } from 'phosphor-react'

interface ToolsHeaderProps {
    title: string
}

export function ToolsHeader({title}: ToolsHeaderProps) {
    return (
        <header className="bg-zinc-100 py-2 px-4 flex items-center justify-between">
            <button className="h-10 w-10 rounded-full overflow-hidden object-cover">
                <CaretLeft
                    className="hover:text-zinc-500"
                    size={24}
                />
            </button>

            <span className='text-lg uppercase'>{title}</span>

            <button>
                <ChatCircle
                    className="hover:text-zinc-500"
                    size={24}
                />
            </button>
        </header>
    )
}
