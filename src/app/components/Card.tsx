interface CardProps {
   title: string
   highlight: string
   highlightValue: string | number
   children: React.ReactNode
   completed: boolean
}

export function Card({title, highlight, highlightValue, completed, children}: CardProps) {
    return (
        <li 
            className="w-full rounded shadow bg-zinc-100 p-3 grid grid-cols-4 grid-flow-row divide-x-2 data-[completed='true']:bg-green-600 data-[completed='true']:text-white group transition-colors"
            data-completed={String(completed)}
        >

            <div className="col-span-3">
                <span className="text-lg font-bold">{title}</span>

                <div className="divide-x flex gap-2">
                    {children}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <span className="text-sm text-zinc-500 group-data-[completed='true']:text-white transition-colors">{highlight}</span>
                <span className="text-2xl font-semibold">{highlightValue}</span>
            </div>
        </li>
    )
}