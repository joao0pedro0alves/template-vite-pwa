import * as SwitchUI from '@radix-ui/react-switch'

interface SwitchProps extends SwitchUI.SwitchProps {
    label: string
    id: string
}

export function Switch(props: SwitchProps) {
    return (
        <div className='w-full flex items-center gap-2 mb-4'>
            <SwitchUI.Root
                className="w-14 h-8 bg-zinc-400/70 border rounded-full relative data-[state='checked']:bg-emerald-600"
                {...props}
            >
                <SwitchUI.Thumb 
                    className="block w-6 h-6 bg-white rounded-full transition-all translate-x-1 will-change-transform data-[state='checked']:translate-x-7"
                />
            </SwitchUI.Root>

            <label className='text-zinc-500' htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    )
}
