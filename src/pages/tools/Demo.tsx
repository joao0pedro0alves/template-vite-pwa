import { FormEvent } from 'react'
import { Screen } from '../../app/components/Screen'
import { TextField } from '../../app/components/TextField'
import { ToolsHeader } from '../../app/components/ToolsHeader'
import { LoadingButton } from '../../app/features/LoadingButton'

export function Demo() {

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
    }

    return (
        <Screen className="relative">
            <ToolsHeader title="Demo" />

            <div className="p-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <TextField
                        autoFocus
                        placeholder="Enter document:."
                        className="h-14"
                        type="text"
                    />

                    <LoadingButton loading={false} type="submit">
                        Iniciar
                    </LoadingButton>
                </form>
            </div>
        </Screen>
    )
}
