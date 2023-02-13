import clsx from 'clsx'
import { Link, LinkProps } from 'react-router-dom'

interface MenuItem extends LinkProps {
    disabled?: boolean
}

export function MenuItem({
    children,
    className,
    disabled,
    ...props
}: MenuItem) {
    return (
        <Link
            {...props}
            role="button"
            data-disabled={String(disabled)}
            className={clsx(
                'flex items-center justify-center h-12 w-full rounded shadow text-white transition-colors bg-emerald-600 uppercase hover:bg-emerald-700 data-[disabled="true"]:bg-zinc-300 data-[disabled="true"]:text-zinc-500 data-[disabled="true"]:cursor-not-allowed',
                className
            )}
        >
            {children}
        </Link>
    )
}
