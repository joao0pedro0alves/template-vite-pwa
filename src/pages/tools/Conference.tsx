import { Divider } from '../../app/components/Divider'
import { Screen } from '../../app/components/Screen'
import { TextField } from '../../app/components/TextField'
import { ToolsHeader } from '../../app/components/ToolsHeader'
import { ConferenceList } from '../../app/features/ConferenceList'
import { LoadingButton } from '../../app/features/LoadingButton'

export function Conference() {
    return (
        <Screen className='max-h-screen'>
            <ToolsHeader 
                title='Conferência'
            />

            <div className="p-4">

                <form className="flex flex-col gap-2">
                    <TextField placeholder="Informe a ordem" className="h-14" />
                    <LoadingButton loading={false} type="submit">
                        Iniciar conferência
                    </LoadingButton>
                </form>

                <Divider />
                <ConferenceList />
            </div>
        </Screen>
    )
}
